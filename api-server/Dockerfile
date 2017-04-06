FROM node:7.7.3

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/api-server && cp -a /tmp/node_modules /usr/src/api-server

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /usr/src/api-server
ADD . /usr/src/api-server

EXPOSE 8080

CMD ["npm", "run", "dev"]
