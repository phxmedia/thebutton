 'use strict';

angular.module('thebuttonApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-thebuttonApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-thebuttonApp-params')});
                }
                return response;
            }
        };
    });
