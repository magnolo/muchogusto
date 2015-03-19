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
  .controller('IndexCtrl', function($scope, $rootScope, $timeout) {
    $scope.resources1 = {
      video: [
        'videos/slowhander1.webm',
        'videos/slowhander1.ogv',
        'videos/slowhander1.mp4',
        'videos/slowhander1.swf'
      ],
      poster: 'images/snapshot.png',
      show: true
    };
    $scope.resources2 = {
      video: [
        'videos/slowhander2.webm',
        'videos/slowhander2.ogv',
        'videos/slowhander2.mp4',
        'videos/slowhander2.swf'
      ],
      poster: 'images/snapshot2.png',
      show: false
    };
    $scope.resources3 = {
      video: [
        'videos/slowhander3.webm',
        'videos/slowhander3.ogv',
        'videos/slowhander3.mp4',
        'videos/slowhander3.swf'
      ],
      poster: 'images/snapshot2.png',
      show: false
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
          $scope.resources1.show = false;
          $scope.resources2.show = true;
          $scope.centered = true;
          $scope.main = false;
          $timeout(function() {
            $scope.resources3.show = true;
          }, 990);
        } else if (toState.name === 'home') {
          $scope.main = true;
          $scope.resources3.show = false;
          $scope.resources2.show = false;
          $scope.resources1.show = true;
        } else {
          $scope.centered = false;
          $scope.main = false;
          $scope.resources3.show = true;
        }
      });


  });