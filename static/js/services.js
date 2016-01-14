// Resources have the following methods by default:
// get(), query(), save(), remove(), delete()

angular.module('services', ['ngResource'])
  .factory('Link', function($resource) {
    return $resource('/api/links/:id/');
  });
