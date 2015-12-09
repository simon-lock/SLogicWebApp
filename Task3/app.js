'use strict';

angular.module('ourApp', [
    'ngRoute',
    'dataSourceControllers'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/data-list.html',
            controller: 'DataSourceCtrl',
            controllerAs: 'dataCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
