# Product Management System

### Requirements
Before starting, you'll need to have those below.
* [Docker](https://docs.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

### Environments
* `Node@7.7.3`
* `NPM@4.1.2`
* `Express@^4.13.3`
* `React@^^15.3.2`

### Clone the project
```
$ git clone -b wayne git@github.com:waynelai614/react-homework.git
$ cd react-homework/
```
### Running the app
Boot the app with
```
$ docker-compose up -d
```
* API Server: [http://0.0.0.0:8080](http://0.0.0.0:8080)
* Client Server: [http://0.0.0.0:3000](http://0.0.0.0:3000)

### Check container status
`$ docker ps`

### Enter container
* Services (defined in `docker-compose.yml`)
  * `mongo`
  * `api`
  * `web`

`$ docker-compose run [SERVICE_NAME] /bin/bash`

### Stop the app
`$ docker-compose down`

### Testing
* API Server
  * Single run `$ sh test api-server`
  * Watch mode `$ sh test api-server -w`
* Client Server
  * Single run `$ sh test client-server`
  * Watch mode `$ sh test client-server -w`
    * Karma server started at [http://0.0.0.0:9876/](http://0.0.0.0:9876/)
