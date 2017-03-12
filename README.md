# Todo List sample 
[![Build Status](https://travis-ci.org/Chun-MingChen/react-homework.svg?branch=feature/step4-react-router)](https://travis-ci.org/Chun-MingChen/react-homework)

> This is an todoList example built with ```React``` and  ```Redux``` to construct and display view in ```client-server```.
> On the other hand, in back-end ```api-server```, it handles all Restful requests and data depending on ```Node.js```, ```Express``` and ```mongo```.
* [Feature](#feature)
* [Prerequisite](#prerequisite)
* [Getting Started](#getting-started)
* [Usage about Docker](#usage-about-docker)
* [Testing](#testing)
* [PM2 CheatSheet](#pm2-cheatsheet)

## Feature

* [pm2](https://github.com/Unitech/pm2): Production process manager for Node.js apps with a built-in load balancer.

## Prerequisite
* node >= 6.0.0
* mongoDB

or 
* ```Docker```

## Getting Started

Now, there are two ways to boost the servers, one is running with ```docker ```, and the other is using ur local ```node``` and ```mongo```.

### 1. Getting Started with ```Docker```

1. First you have to make sure to locate in directory    ```react-homework```.
   ```sh
   cd react-homework/
   ```
2. Then, you can execute following command to ```build``` docker image.
   ``` sh
   docker build -t todo_list_server .
   ```

3. Finally, runs the process in isolated ```container```.
   ``` sh
   docker run -it --rm -P -p 8080:8080 -p 3000:3000 -p 27017:27017 --name todo_list_server -v $PWD:/usr/src/react-homework todo_list_server
   ```

4. As long as ```MongoDB starting```, it means that you run the container sucessfully.


### 2. With ur local ```Node``` and ```MongoDB```
1. First of All, you have to install all ```node_modules``` in root and the ```servers``` generally.

   ```sh
   npm i
   npm run install:all
   ```

2. make sure ```mongo``` is boosting and listening on port ```27017```.
3. The simplest way to start and monitor ```client-server``` and ```api-server``` is using the following.

   ```sh
   npm run serve:all
   ```
## Usage about Docker 
### Enter container 
```sh
docker exec -it todo_list_server /bin/bash
```
### Important Folder Structure
```sh
/
|-- /usr/src
|    └-- react-homework # repo
|
|-- /tmp
|    └-- docker-cmd.sh # initialized shell script when docker run 
|
|-- /data/db # mongoDB folder

```
### Check process
```sh
docker ps -a
```

### Running servers
As long as run the container, ```pm2``` will boost servers automatically.
All you have to do is following the constrctions of ```pm2``` to manipulate the servers.There is a cheatsheet about ```how to using pm2``` below.

### Leave container 
```sh
$ exit
```

### Stop container 
```sh
docker stop todo_list_server
```
As long as stop container, it will be ```delete``` immediately because of config ```--rm```.

## Testing
Testing for ```api-server```
```sh
npm run test:api
```
Testing for ```cli-server```
```sh
npm run test:cli
```
* [trevor](https://github.com/vadimdemedes/trevor): 
Your own mini Travis CI to run tests locally

## PM2 CheatSheet
Use all commands in ```pm2``` you may know as long as to prepend ```./pm2_remote```.

```sh
# Start all applications
npm run serve:all

# Start only client-server
npm run serve:cli

# Start only api-server
npm run serve:api

# Display all processes status
npm run list

# Stop all
npm run stop:all

# Restart all
npm run restart:all

# Reload all
npm run reload:all

# Delete all
npm run delete:all
```
