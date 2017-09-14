'use strict';

require('./scss/main.scss');

const path = require('path');

const angular = require('angular');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');

const ngTouch = require('angular-touch');
const ngAnimate = require('angular-animate');
const uiRouter = require('angular-ui-router');
const uiBootstrap = require('angular-ui-bootstrap');

// Create Angular Module
const app = angular.module('app', [ngTouch, ngAnimate, uiRouter, uiBootstrap]);

// Load Config
let context = require.context('./config/', true, /.js$/);
context.keys().forEach( path => {
  app.config(context(path));
});

// Load View Controllers
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
