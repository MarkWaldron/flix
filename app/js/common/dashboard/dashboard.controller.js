var _ = require('lodash');
angApp.controller('DashboardCtrl', function($rootScope, $scope, Storage) {
  Storage.init();
  $rootScope.$on('dbLoaded', function() {
    $scope.$apply($scope.allMedia = Storage.allMedia.data);
  });

  $rootScope.$on('newMediaAdded', (event) => {
    $scope.$apply($scope.allMedia = Storage.allMedia.data);
  });

  function findByName(name) {
    return _.find($scope.allMedia, {
      title: name
    });
  }

  function findByType(type) {
    return _.filter($scope.allMedia, {
      type: type
    });
  };

  function findByGenre(genre) {
    return _.filter($scope.allMedia, {
      genre: genre
    });
  };
})
