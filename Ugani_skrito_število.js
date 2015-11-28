
var x = 1; // najnižja začetna omejitev števila
var y = 100; // najvišja začetna omejitev
var hidden = prompt("Vnesi skrito stevilo (od 1 do 100): " );  
var result = [];
var number = Math.floor(Math.random() * (y-x+1)+ x); // funkcija generiranja naključnega števila z uporabo omejitev (x,y)

if (hidden != number)
{
	for (var i =1; i<=100; i++)
	{   
        if (hidden > number)
            {
              x=number;
              number = Math.floor((Math.random() * y) + x);
            }
    	if (hidden < number)
            {
              y=number;
              number = Math.floor((Math.random() * y) + x);
            }
       
            result.push(number); 
	}
}
       
        console.log('Ugibanja računalnika: ' + result);
        console.log('Sktiro stevilo je bilo: ' + hidden);
