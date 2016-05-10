'use strict';

/* App Module */

var compsApp = angular.module('compsWidgetApp', [
  'ngRoute',
  'compsControllers',
  'compsServices'
]);

compsApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/comps', {
      templateUrl: 'partials/house-list.html',
      controller: 'HouseListCtrl'
    })
    .when('/comps/:houseId', {
      templateUrl: 'partials/house-detail.html',
      controller: 'HouseDetailCtrl'
    })
    .otherwise({
      redirectTo: '/comps'
    })
}]);
