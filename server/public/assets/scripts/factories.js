myApp.factory("HeroService", ["$http", function($http){
  var data = {};

  var postHero = function(data){
    $http.post("/hero", data).then(function(response){
      console.log("HERO SaVeD:", response);
      getHeroes();
    });
  };

  var getHeroes = function(){
    $http.get("/hero").then(function(response){
      console.log("get HeroEs:", response.data);
      //add key to cause data bind to happen
      data.response = response.data;
    });
  };

  var deleteHero = function(heroId){
    console.log("currently in FACTORY", heroId.heroId);
    $http.delete("/hero" + heroId.heroId).then(function(response){
      getHeroes();
    });
  };

  return {
    deleteHero : deleteHero,
    postHero : postHero,
    getHeroes : getHeroes,
    data : data
  };

}]);
