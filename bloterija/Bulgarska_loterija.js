angular.module('Bulgarska_loterija', []);
angular.module('Bulgarska_loterija')
  .controller('loterija', function($scope, $q, $http){

  $scope.result = 'Žrebanje';
  $scope.zrebaj = function()
  {
     $scope.result = 'Žrebam';
    var doSomethingInFuture = getPromise();

  };
  
  doSomethingInFuture.then(function(success){
      $scope.result = success;  
    }, function(error){
      $scope.result = error;
    }, function(notify){
      $scope.result = notify
    });
  
  function getPromise()
  {
   var promise = $q.defer();
	  var stevilka =[];
   var ncas = Math.floor((Math.random() * 3000) + 2000);
    setTimeout(function(){
      
      $scope.result.push(stevilka);
     
    }, ncas);
    
    return promise.promise;
  }
  
});
/*
	var nakljucno = Math.floor((Math.random() * 100) + 1)
    var stevilka = [];
    setTimeout(function(){
      $scope.result.push(nakljucno);
      
     $scope.result = stevilka;
    }, ncas);
	
	
	*/