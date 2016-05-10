'use strict';

/* Controllers */

var compsControllers = angular.module('compsControllers', []);

compsControllers.controller('HouseListCtrl', ['$scope', 'House',
  function ($scope, House) {
    $scope.houses = [];
    $scope.sortBy = 'cost';
    
    House.batman.query(function (response) {
      angular.forEach(response, function (item, address) {
        if (item.cost) {
          var firstCommaIndex = address.indexOf(',');

          $scope.houses.push({
            cost: item.cost.replace(',', ''),
            displayCost: '$' + item.cost,
            beds: item.beds,
            baths: item.baths,
            sqft: item.sq_ft,
            img: item.img,
            url: item.url,
            street: address.substring(0, firstCommaIndex),
            city: address.substring(firstCommaIndex + 1)
          });
        }
      });
    });
    
    House.superman.query(function (response) {
      $scope.houses = $scope.houses.concat(response.items.map(function (item) {
        var firstCommaIndex = item.address.indexOf(',');

        return {
          cost: item.price,
          displayCost: '$' + item.price.replace(/(\d)(?=(\d{3})+$)/g, '$1,'),
          beds: item.beds,
          baths: item.baths,
          sqft: item.sqft,
          img: item.thumb,
          url: item.url,
          built: item.built,
          street: item.address.substring(0, firstCommaIndex),
          city: item.address.substring(firstCommaIndex + 1)
        }
      }));
    });
}]);
