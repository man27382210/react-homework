FROM node:7.7.3

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD client-server/package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/client-server && cp -a /tmp/node_modules /usr/src/client-server

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /usr/src/client-server
ADD ./client-server /usr/src/client-server

EXPOSE 3000

CMD ["npm", "start"]
