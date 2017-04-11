import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './app/reducers/';
import { match, RouterContext } from 'react-router';
import routes from './app/routes/';

function renderFullPage(html) {
  return (`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>TodoList Sample </title>
      <meta name="description" content="just another react + webpack boilerplate">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="/css/materialize.min.css">
      <link rel="stylesheet" href="/css/csspin-balls.css">
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/js/materialize.min.js"></script>
      <script src="/main.js"></script>
    </body>
  </html>
  `);
}

// Compile an initial state
function preloadingState() {
  return new Promise((resolve) => {
    // return initial state
    resolve({
      loadingFinished: true,
    });
  });
}

module.exports = (req, res) => {
  // SSR for react-router
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      preloadingState().
        then((preloadedState) => {
          // Create a new Redux store instance
          const store = createStore(reducers, preloadedState);
          return store;
        })
        .then((store) => {
          // Render the component to a string
          const html = renderToStaticMarkup(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          );

          // return page and status OK
          const page = renderFullPage(html);
          res.status(200).send(page);
        });
    } else {
      res.status(404).send('Not found');
    }
  });
};

