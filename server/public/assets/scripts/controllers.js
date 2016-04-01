myApp.controller("AddController", ["$scope", "$http", "HeroService", function($scope, $http, HeroService){
  $scope.heroes = {};
  $scope.data = [];

  $scope.addHero = function(data){
    console.log("in controllers ADD HeRo:", data);
    var postObject = {};
    postObject.first_name = data.first_name;
    postObject.last_name = data.last_name;
    postObject.city = data.city;
    postObject.power_name = data.power_name;

    HeroService.postHero(postObject);
  };
}]);

myApp.controller("ShowController", ["$scope", "HeroService", function($scope, HeroService){
  console.log("in the showCONTROLLER");

  $scope.deleteHero = function(heroId){
    console.log("trying to delete:", heroId);
    var deleteId = {"heroId": heroId};
    HeroService.deleteHero(deleteId);
  };

  HeroService.getHeroes();

  $scope.data = HeroService.data;
}]);
