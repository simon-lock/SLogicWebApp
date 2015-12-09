'use strict';

angular.module('ourApp', [
    'ngRoute',
    'dataSourceControllers'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'list/data-list.html',
            controller: 'DataSourceCtrl',
            controllerAs: 'dataCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
