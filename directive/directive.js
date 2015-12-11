angular.module('app', []);
/*
angular.module('app').directive('izpisZnakov', function(){
  
  return {
      scope: {
      string: '='
    },
    restrict: 'EA',
    template: '<div class={{color}}>{{ string }}</div>',
    controller: function($scope){
		var string ='';
	$scope.$watch('string', function(string)
    {
		
         if (this.string.length < 10)
				{
					 this.string = 'text-success';
					
				}
		else
				{
					this.string = 'text-danger';
				}
    });
           
    },
    link: function(scope, element, attributes) {
            
        }
  };
  
}); */

angular.module('app').directive('stevilo', function(){
  
  return {
      scope: {
      number: '='
    },
    restrict: 'EA',
    template: '<div>{{ number }}</div>',
    controller: function($scope){
	$scope.$watch('number', function(select)
    {
		var select = '';
		this.number = select;
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
       select = "november";
        break;
	case 12:
       select = "December";
        break;
	default :
	   select = "Napaka! Nisi izbral števila od 1 do 12!";
		
}
    });
           
    },
    link: function(scope, element, attributes) {
            
        }
  };
  
});