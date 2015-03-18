'use strict';

/**
 * @ngdoc function
 * @name muchoApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the muchoApp
 */
/*jshint unused:false*/
angular.module('muchoApp')
  .controller('IndexCtrl', function($scope, $rootScope) {
    $scope.resources1 = {
      video: [
        'videos/slowhander1.webm',
        '*.ogv',
        '*.mp4',
        '*.swf'
      ],
      poster: 'http://placehold.it/2000&text=you%20may%20want%20to%20have%20a%20poster',
      show: true
    };
    $scope.resources2 = {
      video: [
        'videos/slowhander2.webm',
        '*.ogv',
        '*.mp4',
        '*.swf'
      ],
      poster: 'http://placehold.it/2000&text=you%20may%20want%20to%20have%20a%20poster',
      show: true
    };
    $scope.resources3 = {
      video: [
        'videos/slowhander3.webm',
        '*.ogv',
        '*.mp4',
        '*.swf'
      ],
      poster: 'http://placehold.it/2000&text=you%20may%20want%20to%20have%20a%20poster',
      show: true
    };
    $scope.fullScreen = true;
    $scope.muted = true;
    $scope.zIndex = '-1';
    $scope.centered = true;
    $scope.main = false;
    $scope.lng = 'de';
    $rootScope.$on('$stateChangeSuccess',
      function(event, toState, toParams) {
        if (toState.name === 'main') {
          $scope.centered = true;
          $scope.main = false;
        } else if (toState.name === 'home') {
          $scope.main = true;
        } else {
          $scope.centered = false;
          $scope.main = false;
        }
      });


  });