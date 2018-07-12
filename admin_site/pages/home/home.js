'use strict';

 adminApp.home = angular.module('adminApp.home', ['ngRoute'])

adminApp.home.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/home/home.html',
    controller: 'HomeCtrl'
  });
}]);

adminApp.home.controller('HomeCtrl', [function() {
  console.log('HomeCtrl initialized');
}]);
