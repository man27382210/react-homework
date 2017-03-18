import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PageIndex from './app/components/common/notFound.jsx';

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
      <link rel="stylesheet" href="css/materialize.min.css">
      <link rel="stylesheet" href="css/csspin-balls.css">
    </head>
    <body>
      <div id="root">${html}</div>
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script src="js/materialize.min.js"></script>
      <script >
        $(document).ready(function() {
          $('select').material_select();
          $('.modal').modal();
        });
      </script>
      <script src="main.js"></script>
    </body>
  </html>
  `);
}


module.exports = (req, res) => {
  const page = renderFullPage('');
  res.send(page);
};
