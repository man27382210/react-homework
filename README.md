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
Visit: [http://0.0.0.0:3000](http://0.0.0.0:3000)

### Testing

* Karma
  * Single run `$ docker-compose exec web npm test`
  * Live mode `$ docker-compose exec web npm run test-watch`
    * Karma server started at [http://0.0.0.0:9876/](http://0.0.0.0:9876/)
