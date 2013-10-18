var first = 0, second = 1, fib = first + ', '+ second;


var fibCount = prompt("How many numbers would you like the fib to include?");


for (i = 0; i < fibCount; i++){

	temp = (first + second);
	first = second;
	second = temp;

	fib = fib + ', ' + second;
	
}

console.log(fib);

while (i< fibCount){
	temp = (first + second);
	first = second; 
	second = temp;
	fib = fib + ', ' + second;
	i++;
}

console.log("using while loop: " + fib);