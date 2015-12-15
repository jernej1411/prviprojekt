
   

angular.module('FizzbuzzAngularJS', []);
angular.module('FizzbuzzAngularJS').controller('Fizzbuzz', function($scope) 
{
			$scope.number = value;
			var fizz = 'fizz'; 
            var buzz = 'buzz';
            var fizzbuzz = 'fizzbuzz';
            var number = ''; 
		$scope.$watch(‘sprememba’, function(number)
    	{
        if (number % 3 == 0 ) 
                        { 
                         number = fizz; 
                         }
                        
        if (number % 5 == 0)
                        {
                         number = number + buzz;  
                         }
                           
        if ((number % 3 != 0) && (value % 5 != 0))
                        {
                         number = i + ' '; 
                         }
		});
                
	
	
}); 
