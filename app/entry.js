'use strict';

const path = require('path');

const angular = require('angular');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');

const uiRouter = require('angular-ui-router');
const uiBootstrap = require('angular-ui-bootstrap');

// Create angular module
const app = angular.module('app', [uiBootstrap, uiRouter]);

// LOAD CONFIG
let context = require.context('./config/', true, /.js$/);
context.keys().forEach( path => {
  app.config(context(path));
});

// LOAD VIEW CONTROLLERS
context = require.context('./view/', true, /.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  let module = context(key);
  app.controller(name, module);
});

// Load components
context = require.context('./component/', true, /.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  app.component(name, module);
});
