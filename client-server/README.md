# Client Server [![Build Status](https://travis-ci.org/Chun-MingChen/react-homework.svg?branch=feature/step2-redux)](https://travis-ci.org/Chun-MingChen/react-homework)
> It's a to-do list example based on react, redux, webpack.

## Basics
### Prerequisite
* node >= 6.0.0

### Feature
* [Materialize](https://github.com/Dogfalo/materialize)
: A modern responsive front-end framework based on Material Design

## Getting started

```sh
npm install

npm run dev
```

navigate to ```http://localhost:3000``` in your browser.

## Testing
* Select ```karma``` as test runner.
* ```Mocha``` for JavaScript test framework
* Using ```webpack``` in order to bundle the React code
* [Airbnb's Enzyme library](https://github.com/airbnb/enzyme) for testing React 

> Test all the ```.spec.js``` in `test` folder.

If you wanna execute the tests whenever one of these files changes, please run 
```sh
npm run test:dev
```

Otherwise, Continuous Integration mode as following
```sh
npm test
```

## Reference
* [test-with-connected-components](https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md#connected-components)