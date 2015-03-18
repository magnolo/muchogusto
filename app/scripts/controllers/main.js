'use strict';

/**
 * @ngdoc function
 * @name muchoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the muchoApp
 */
angular.module('muchoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
