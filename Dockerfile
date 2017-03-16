FROM node:6

# install mongodb
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
RUN echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.4 main" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list
RUN apt-get update
RUN apt-get install -y mongodb-org
RUN mkdir -p /data/db

# Create src directory
RUN mkdir -p /usr/src/react-homework

# container init shell script 
ADD docker-cmd.sh /tmp/docker-cmd.sh

WORKDIR /usr/src/react-homework

# executing shell script when container was created
ENTRYPOINT ["bash", "/tmp/docker-cmd.sh"]