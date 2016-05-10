'use strict';

/* Services */

var compsServices = angular.module('compsServices', ['ngResource']);

compsServices.factory('House', ['$resource',
  function ($resource) {
    return {
      batman: $resource('houses/:houseId.json', {}, {
        query: {
          method: 'GET',
          params: { houseId: 'batmanRealty' },
          isArray: false
        }
      }),
      superman: $resource('houses/:houseId.json', {}, {
        query: {
          method: 'GET',
          params: { houseId: 'supermanRealty' },
          isArray: false
        }
      })
    };
  }]);
