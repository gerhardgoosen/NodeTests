'use strict';

angular.module('adminApp.version', [
  'adminApp.version.interpolate-filter',
  'adminApp.version.version-directive'
])

.value('version', 'LP Node Test 0.1');
