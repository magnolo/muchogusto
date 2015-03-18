'use strict';

/**
 * @ngdoc overview
 * @name muchoApp
 * @description
 * # muchoApp
 *
 * Main module of the application.
 */
angular
  .module('muchoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngVidBg'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html'
      })
      .state('main', {
        url: '/main/:type',
        templateUrl: 'views/content.html'
      })
      .state('main.content', {
        url: '/:id',
        views: {
          'content': {
            templateUrl: 'views/site.html'
          }
        }
      });

  });