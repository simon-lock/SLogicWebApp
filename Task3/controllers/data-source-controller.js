
angular.module('dataSourceControllers', [])
  .controller('DataSourceCtrl', ['$scope', function($scope) {
    var that = this;

    that.dataSets =
    [
      {title:"Hello, World!", body:"WAZZUP!"},
      {title:"Hello again, World!", body:"WAZZUP NOW!"},
      {title:"Hello, World!", body:"WAZZUP!"},
      {title:"Hello again, World!", body:"WAZZUP NOW!"},
      {title:"Hello, World!", body:"WAZZUP!"},
      {title:"Hello again, World!", body:"WAZZUP NOW!"},
      {title:"Hello, World!", body:"WAZZUP!"},
      {title:"Hello again, World!", body:"WAZZUP NOW!"},
      {title:"Hello, World!", body:"WAZZUP!"},
      {title:"Hello again, World!", body:"WAZZUP NOW!"},
      {title:"Hello, World!", body:"WAZZUP!"},
      {title:"Hello again, World!", body:"WAZZUP NOW!"},
      {title:"Hello, World!", body:"WAZZUP!"},
      {title:"Hello again, World!", body:"WAZZUP NOW!"},
      {title:"Hello, World!", body:"WAZZUP!"},
      {title:"Hello again, World!", body:"WAZZUP NOW!"},
      {title:"Hello, World!", body:"WAZZUP!"},
      {title:"Hello again, World!", body:"WAZZUP NOW!"}
    ];
  }]);
