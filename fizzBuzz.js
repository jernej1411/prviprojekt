var limit = prompt("Povej stevilo:" ); // z ukazom odpremo okno kjer vpišemo število
   

for(var i = 1; i < limit; i++) // for zanka
{
    
            var fizz = 'fizz'; // spremenljivke inicializiramo in definiramo
            var buzz = 'buzz';
            var fizzbuzz = 'fizzbuzz';
            var number = ''; // definiramo string
                if (i % 3 == 0 ) // z pogojem preverimo če je število deljivo z 3 in ostanek deljenja 0
                        { 
                         number = fizz; // shrani vrednost fizz v spremeljivko
                         }
                        
                if (i % 5 == 0)
                        {
                         number = number + buzz;  // shrani oz. doda vrednost buzz v spremeljivko 
                         }
                           
                if ((i % 3 != 0) && (i % 5 != 0))
                        {
                         number = i + ' '; // vrne rezultat če je deljivo s 3 in 5
                         }
                
                console.log(number); // izpiše vrednost spremeljivke number na zaslon
                 
}
