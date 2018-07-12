'use strict';

adminApp.profile = angular.module('adminApp.profile', ['ngRoute']);

adminApp.profile.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'pages/profile/profile.html'
  ,/*  controller: 'ProfileCtrl'*/
  });
}]);

adminApp.profile.controller('ProfileCtrl', ['$location','$rootScope','$scope','$mdToast',
   function($location, $rootScope, $scope, $mdToast) {
  var control = this;

 $scope.labels = {
        lbl_profile_image:'Profile Image'
       };

  control.updateProfile = function(){
    console.log('ProfileCtrl updateProfile');
    $mdToast.show($mdToast.simple()
            .textContent('Profile Updated')
             .position('center')
             .hideDelay(2000)
           );
  }

  console.log('ProfileCtrl initialized');
 }]);
