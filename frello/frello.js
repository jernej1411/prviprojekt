angular.module('frello', []);
angular.module('frello').controller('frellocon', function($scope)
{
	$scope.izpisi = [];
    $scope.add = function (opravilo){
		
	$scope.izpisi.push({text:$scope.opravilo, done:false});
    $scope.opravilo = '';
		
	};
	 $scope.remove = function () {
		 var odstrani = $scope.izpisi;
		 $scope.izpisi = [];
		 angular.forEach(odstrani,function(izpis){
			 if(!izpis.done) $scope.izpisi.push(izpis);
		 });
     
    };
 
}); 