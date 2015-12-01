angular.module('baka_mlb', []);
angular.module('baka_mlb').controller('demo', function($scope){

    $scope.izracunajV = function(data)
	{
		$scope.vplac = vplac;
		$scope.smesec = smesec;
		$scope.obre_m = obre_m;
		$scope.izracun = (vplac * smesec * obre_m)/ 100;
    };
  
   
});
angular.module('default').controller('demo1', function($scope){
	 $scope.izracunajI = function(data)
    {
		 $scope.izplac = izplac;
		 $scope.smesec = smesec;
         $scope.izracun = izplac * smesec;
    };

});