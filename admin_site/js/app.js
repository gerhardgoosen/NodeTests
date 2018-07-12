'use strict';


// Declare app level module which depends on views, and components
var adminApp = angular.module('adminApp',['ngRoute','ngMaterial','ngMdIcons',/*'ui.bootstrap',*/
                                            'adminApp.home',
                                            'adminApp.profile',  
                                            'adminApp.map',
                                            'adminApp.version'
                                         ]);

adminApp.constant('Author', 'Gerhard Goosen');
adminApp.constant('Author_URL','https://www.linkedin.com/pub/gerhard-goosen/9/a65/292');
adminApp.constant('BASE_ENDPOINT_URI', 'http://gpgoose-laptop:/8080/restapi/');

adminApp.config(['$locationProvider', '$routeProvider', '$httpProvider', '$compileProvider',
function($locationProvider, $routeProvider, $httpProvider, $compileProvider) {
    /* ==================== Config Start ==================== */
    /* ==================== compileProvider ==================== */
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|content):|data:image\//);
    /* ==================== httpProvider ==================== */
    $httpProvider.defaults.withCredentials = true;
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.common = {};
    }
    $httpProvider.defaults.headers.common["Cache-Control"] = "no-cache";
    $httpProvider.defaults.headers.common.Pragma = "no-cache";
    $httpProvider.defaults.headers.common["If-Modified-Since"] = "0"
    /* ==================== locationProvider ==================== */
    $locationProvider.hashPrefix('!');
    /* ==================== routeProvider ==================== */
    $routeProvider.otherwise({
        redirectTo: '/home'
    });

    /* ==================== Config Done ==================== */

}]);


adminApp.run(['$rootScope', '$location', '$mdToast',
function($rootScope, $location ,$mdToast ) {
  $rootScope.loading = false;

  document.addEventListener('storage', function (event) {
    console.log("Storage : >> " + event.key, event.newValue);
  });

  $rootScope.$on('$locationChangeStart',
          function(event, newUrl, oldUrl) {
            $rootScope.loading = true;
            console.debug("locationChangeStart >> " + oldUrl+" << to >>"+newUrl+"<<");
            console.debug("current $location.path() : " + $location.path() );

            if(typeof($rootScope.user) !== "undefined"
              && typeof($rootScope.user.Validated) !== "undefined"
              && $rootScope.user.Validated){
                console.debug("User Is Authenicated :)");
                $rootScope.loading = false;
             }
           else{
                 console.debug("User Not Authenicated :(");
                  if ($location.path() === "/"
                   || $location.path() === ""
                   || $location.path() === " "
                  //  || $location.path() === "/auth"
                   || $location.path() === "/home"
                ) {
                  console.debug("But he should be able to see the page");
                  $rootScope.loading = false;
                  }
                else{
                     event.preventDefault();
                     // This prevents the navigation from happening
                     $location.path("/");
                     $rootScope.loading = false;
                     $mdToast.show($mdToast.simple()
                             .textContent('Please log in.')
                              .position('center')
                              .hideDelay(2000)
                            );
                   }
               }
        });
      }]);



adminApp.appControl = adminApp.controller('AppCtrl', ['$location','$rootScope','$scope',
   function($location, $rootScope, $scope) {
          var control = this;

          control.logout = function(){
              console.log('<<=== AppCtrl.logout() ===>>');
              console.debug("User removed from $rootScope");
              $rootScope.user = {Validated:false,UserId:'',Password:'',Token:''};
              sessionStorage.setItem('userInfo', JSON.stringify($rootScope.user));
              $location.path('/');
          };

          //new tabs and refresh safe session handling
          function init(){
             console.warn("app.init()");
             if (sessionStorage["userInfo"]) { //auto login after refresh
              $rootScope.userInfo =  JSON.parse(sessionStorage.getItem('userInfo'));
               console.warn("sessionStorage : "+ JSON.stringify($rootScope.userInfo ) );
              //TODO do actual login.
              $rootScope.user = $rootScope.userInfo;
              }

              /*====== MENU ACTIVE TOGGLE=======*/
              $(document).ready(function() {
                  $('.nav li a').click(function() {
                      var $this = $(this);
                      $this.parent().siblings().removeClass('active').end().addClass('active');
                  });
              });
              /*====== MENU ACTIVE TOGGLE=======*/
           }

          init();
          console.log('<<=== AppCtrl initialized ===>>');


 }]);



 function PagingControl($scope) {
     $scope.pageChangeHandler = function(num) {
         console.log('going to page ' + num);
     };
 }


 function randomString(length){
     var s = "";
     while(s.length<length&&length>0){
         var r = Math.random();
         s+= (r<0.1?Math.floor(r*100):String.fromCharCode(Math.floor(r*26) + (r>0.5?97:65)));
     }
     return s;
 }
 function randomBetween(min, max) {
     if (min < 0) {
         return min + Math.random() * (Math.abs(min)+max);
     }else {
         return min + Math.random() * max;
     }
 }
var currentPageSliced ={};
