angular.module('app', []);

angular.module('app').directive('izpisZnakov', function(){
  
  return {
      scope: {
      string: '='
    },
    restrict: 'EA',
    template: '<div class={{color}}>{{ string }}</div>',
    controller: function($scope){
		
	$scope.$watch('string', function(color)
    {
		var color = '';
		var string = '';
         if ($scope.string.length < 10)
				{
					color = 'text-success';	
				}
		else
				{
					color = 'text-danger';
				}
		$scope.color = color;
    });
           
    },
    link: function(scope, element, attributes) {
            
        }
  };
  
}); 

angular.module('app').directive('newsletter', function() {
  return {
    restrict: 'EA',
    template: '<input ng-model="prijava" type="text">'+   '{{newslette}}' +
			  '<button class="btn btn-primary" ng-click="checkin()">Prijava</button>',
     scope:{
         newslette: '='
       },
    controller: function($scope){
		
      $scope.checkin = function(){
		  
        alert(" Prijava je bila uspešna");
      }
	  
    }

  }
});
angular.module('app').directive('stevilo', function(){
  
  return {
      scope: {
	  	number: '='	
	  },
    restrict: 'EA', 
	  
    template: '{{ number }}',
    controller: function($scope){
		
	$scope.$watch('number', function(select)
    {
		     
		switch (select) {
				
    case 1:
       select = "Januar";
        break;
    case 2:
       select = "Februar";
        break;
    case 3:
        select = "Marec";
        break;
    case 4:
        select = "April";
        break;
    case 5:
        select = "Maj";
        break;
    case 6:
       select = "Junij";
        break;
	case 7:
       select = "Julij";
        break;
	case 8:
       select = "Avgust";
        break;
	case 9:
       select = "Septeber";
        break;
	case 10:
       select = "Oktober";
        break;
	case 11:
       select = "November";
        break;
	case 12:
       select = "December";
        break;
		

}
		$scope.number = select;
    }); 
      
    },
    link: function(scope, element, attributes) {
            
        }
  };
  
});