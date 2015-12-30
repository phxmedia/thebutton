'use strict';

angular.module('thebuttonApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


