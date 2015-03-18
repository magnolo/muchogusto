'use strict';

/**
 * @ngdoc function
 * @name muchoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the muchoApp
 */
angular.module('muchoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
