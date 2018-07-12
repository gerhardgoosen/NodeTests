'use strict';

adminApp.map = angular.module('adminApp.map', ['ngRoute' /*,'ngMap' */ ])

adminApp.map.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/map', {
        templateUrl: 'pages/map/map.html'
            /*  ,controller: 'MapCtrl'*/
    });
}]);


adminApp.map.controller('MapCtrl', ['$location', '$rootScope', '$scope', '$mdToast', '$interval', /*'NgMap',*/
    function($location, $rootScope, $scope, $mdToast, $interval /*,NgMap*/ ) {
        var control = this;

        $rootScope.pageTitle = 'Locations';
        $rootScope.pageDescription = 'Manage User Locations here.';

        $scope.pageSizes = [5, 10, 15, 20, 25, 50, 100];
        $scope.currentPage = 1;
        $scope.pageSize = 5;
        $scope.labels = {};


        $scope.pageChangeHandler = function(num) {
            console.log('location page changed to ' + num);
            var begin = (($scope.currentPage - 1) * $scope.pageSize);
            var end = begin + $scope.pageSize;
            control.getMarkerData($scope.locationsList.slice(begin, end));
            control.toggleMarkers();
        };

        control.getTotalPages = function() {
            //  console.log('Math.ceil($rootScope.userList.length / $scope.pageSize);'+Math.ceil($rootScope.userList.length / $scope.pageSize));
            return Math.ceil($rootScope.locationsList.length / $scope.pageSize);
        }

        control.showLocationDetail = function(location) {
            $mdToast.show(
                $mdToast.simple()
                .textContent(
                    'Location : ' + location.Latitude + ',' + location.Longitude +
                    ' Altitude : ' + location.Altitude +
                    ' Accuracy: ' + location.Accuracy)
                .position('center')
                .hideDelay(2000)
            );

        }


        control.showMarkerDetail = function() {
            if (this.getAnimation() != null) {
                this.setAnimation(null);
            } else {
                this.setAnimation(google.maps.Animation.BOUNCE);
            }

        }



        var PinIcon = function() {
            this.path = 'M0-165c-27.618 0-50 21.966-50 49.054C-50-88.849 0 0 0 0s50-88.849 50-115.946C50-143.034 27.605-165 0-165z';
            this.fillColor = 'green';
            this.fillOpacity = 0.6;
            this.scale = 0.2;
            this.strokeWeight = 2;
            this.strokeColor = 'lawngreen';
        };


        $rootScope.locationsList = [];
        control.markers = [];

        function initMap() {
            control.infowindow = new google.maps.InfoWindow();

            // Create a map object and specify the DOM element for display.
            control.map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: -34.397,
                    lng: 150.644
                },
                mapTypeId: google.maps.MapTypeId.SATELLITE,
                scrollwheel: true,
                zoom: 2
            });

            control.map.setTilt(45);
            control.KMLLayer = new google.maps.KmlLayer({
                url: 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml'
            });
            control.transitLayer = new google.maps.TransitLayer();
            control.bikeLayer = new google.maps.BicyclingLayer();
            control.heatmap = new google.maps.visualization.HeatmapLayer({
                data: control.getHeatMapPoints(20000)
            });


            control.getMarkerData($scope.locationsList.slice(0, $scope.pageSize));
            control.toggleMarkers();
        }

        control.changeGradient = function() {
            var gradient = [
                'rgba(0, 255, 255, 0)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 191, 255, 1)',
                'rgba(0, 127, 255, 1)',
                'rgba(0, 63, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 223, 1)',
                'rgba(0, 0, 191, 1)',
                'rgba(0, 0, 159, 1)',
                'rgba(0, 0, 127, 1)',
                'rgba(63, 0, 91, 1)',
                'rgba(127, 0, 63, 1)',
                'rgba(191, 0, 31, 1)',
                'rgba(255, 0, 0, 1)'
            ]
            control.heatmap.set('gradient', control.heatmap.get('gradient') ? null : gradient);
        }

        control.changeRadius = function() {
            control.heatmap.set('radius', control.heatmap.get('radius') ? null : 20);
        }

        control.changeOpacity = function() {
            control.heatmap.set('opacity', control.heatmap.get('opacity') ? null : 0.2);
        }

        control.toggleHeatmap = function() {
            control.heatmap.setMap(control.heatmap.getMap() ? null : control.map);
        }

        control.toggleTransitLayer = function() {
            control.transitLayer.setMap(control.transitLayer.getMap() ? null : control.map);
        }

        control.toggleKMLLayer = function() {
            control.KMLLayer.setMap(control.KMLLayer.getMap() ? null : control.map);
        }

        control.toggleBikeLayer = function() {
            control.bikeLayer.setMap(control.bikeLayer.getMap() ? null : control.map);
        }
        control.toggleMarkers = function() {
            for (var i = 0; i < control.markers.length; i++) {
                control.markers[i].setMap(control.markers[i].getMap() ? null : control.map);
            }
        }
        control.toggleMarkers = function() {
            for (var i = 0; i < control.markers.length; i++) {
                control.markers[i].setMap(control.markers[i].getMap() ? null : control.map);
            }
        }
        control.clearMarkers = function() {
            for (var i = 0; i < control.markers.length; i++) {
                control.markers[i].setMap( null  );
            }
            control.markers=[];
        }
        control.getMarkerData = function(locations) {
            control.clearMarkers();

            for (var i = 0; i < locations.length; i++) {
                var position = new google.maps.LatLng(locations[i].Latitude, locations[i].Longitude);

                var marker = new google.maps.Marker({
                    position: position,
                    icon: new PinIcon()
                    // icon: {
                    //     path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW
                    // }
                });

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        control.infowindow.setContent('User: <b>' + $rootScope.locationsList[i].UserId + '</b> Captured : <b>' + $rootScope.locationsList[i].Captured + '</b>');
                        control.infowindow.setOptions({
                            maxWidth: 200
                        });
                        control.infowindow.open(control.map, marker);
                        control.toggleBounce(marker);
                    }
                })(marker, i));


                control.markers.push(marker);

            }
        }



        control.getHeatMapPoints = function(range) {
            var retData = [];
            for (var i = 1; i <= range; i++) {
                retData.push(new google.maps.LatLng(randomBetween(-90, 90).toFixed(6), randomBetween(-180, 180).toFixed(6)));
            }
            return retData;
        }

        control.toggleBounce = function(marker) {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }



        function init() {
            console.warn("locations.init()");

            $rootScope.locationsList = [];

            if (!$rootScope.userList) {
                $rootScope.userList = [];
                for (var i = 1; i <= 10; i++) {
                    $rootScope.userList.push({
                        Name: randomString(8) + ' ' + randomString(5),
                        Email: randomString(7) + '_' + randomString(5) + '@' + randomString(3) + '.' + randomString(3),
                        Image: '../img/user_placeholder.png'
                    });
                }
            }
            for (var i = 0; i <= $rootScope.userList.length - 1; i++) {

                var img = $rootScope.userList[i].Image;
                var id = $rootScope.userList[i].Email;
                var displayName = $rootScope.userList[i].Name;

                for (var x = 0; x <= 250; x++) {

                    var lat = randomBetween(-90, 90);
                    var lng = randomBetween(-180, 180);
                    var acc = randomBetween(1, 40);
                    var alt = randomBetween(1, 1500);

                    $rootScope.locationsList.push({
                        UserId: id,
                        Image: img,
                        DisplayName: displayName,
                        Latitude: lat.toFixed(6),
                        Longitude: lng.toFixed(6),
                        Altitude: Math.floor(alt),
                        Icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 10
                        },
                        /*new PinIcon(),*/
                        Accuracy: Math.floor(acc),
                        Captured: '2016-06-04 03:40:32'
                    });

                }
            }

            initMap();
            console.log('MapCtrl initialized' + $rootScope.locationsList.length);
        }

        init();

    }
]);



// adminApp.map.controller('PagingControl', PagingControl);
