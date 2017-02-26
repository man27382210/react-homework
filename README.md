# Todo List sample

> This is an todoList example built with ```React``` and  ```Redux``` to construct and display view in ```client-server```.
> On the other hand, in back-end ```api-server```, it handles all Restful requests and data depending on ```Node.js```, ```Express``` and ```mongo```.


## Feature

* [pm2](https://github.com/Unitech/pm2): Production process manager for Node.js apps with a built-in load balancer.

## Prerequisite
* node >= 6.0.0


## Getting Started
First of All, you have to install all ```node_modules``` in root and the ```servers```
```sh
npm i
npm run install:all
```
The simplest way to start and monitor ```client-server``` and ```api-server``` is using the following.
```sh
npm run serve:all
```
or, use all commands in ```pm2``` you may know as long as to prepend ```./pm2_remote```.

## CheatSheet
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