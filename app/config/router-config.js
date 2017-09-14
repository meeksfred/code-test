'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('' , '/');

  let states = [
    {
      name: 'home',
      url: '/',
      controllerAs: 'homeCtrl',
      controller: 'HomeController',
      template: require('../view/home/home.html'),
    },
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });
}
