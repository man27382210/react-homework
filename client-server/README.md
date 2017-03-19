# Client Server
> It's a isomorphic to-do list example based on react, redux, react-router and webpack.

## Basics
### Prerequisite
* node >= 6.0.0

### Feature
* [Materialize](https://github.com/Dogfalo/materialize)
: A modern responsive front-end framework based on Material Design
* [csspin](https://github.com/webkul/csspin)
: CSS Spinners and Loaders

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
* [React Router Testing](https://github.com/ReactTraining/react-router/blob/57543eb41ce45b994a29792d77c86cc10b51eac9/docs/guides/testing.md)
* [react-redux-isomorphic-example](https://github.com/coodoo/react-redux-isomorphic-example)
: An isomorphic example built with react and redux , see readme for detailed instructions.
* [Server Rendering in Redux](http://redux.js.org/docs/recipes/ServerRendering.html)
* [Unexpected token < error in react router component](http://stackoverflow.com/questions/29718481/unexpected-token-error-in-react-router-component)