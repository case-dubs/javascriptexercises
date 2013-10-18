function getInput(){
	var fibCount = document.getElementById('fibCount').value;
	var consol = document.getElementById('consol').checked;
	var table = document.getElementById('table').checked;

	//console.log("Consol radio button is checked: " + consol);

	if(fibCount === "" || isNaN(fibCount)){
		alert("please enter a valid number")
	}
	else if (table != true && consol != true){
		//this isn't working in the case that one is checked the alert is still appearing
		alert("please specify Console or Table for printout");
	}

	//If user checks the table radio, then the table prints and the array variables print out in a list below the table
	else if (table == true){
		console.log("table is checked");
		printFibonacciList("table");
		displayFibonacciArray(fibCount);
	} 
	//If user checks the Console radio, then a comma seperated string of the Fibonacci list prints in the console and the array variables print out in a list below the table
	else if (consol == true) {
		printFibonacciList("consol");
		displayFibonacciArray(fibCount);
	}
};

/*This code is from an earlier exercise where the fibCount was entered through the prompt: 

var fibCount = prompt("How many numbers would you like the fib to include?");

var fibCountVal = fibCount.value;*/


function printFibonacciList(checkedRadio){	

	var fibCount = document.getElementById('fibCount').value;
	var first = 0, second = 1, fib = first + ', '+ second;	

	if(fibCount === ""){
		//error message if nothing is entered in the text entry box
		alert("Invalid Entry!");
	}
	else if(isNaN(fibCount)){
		//error if a NaN is entered in the text entry box
		alert("Invalid Entry!");
	}
	else{
		
		var row1 ="<td>F0</td>" + "<td>F1</td>", row2='<td>' + 0 + '</td>' + '<td>' + 1 + '</td>'; 

		for (i = 1; i < (fibCount - 1); i++){
		
			console.log("i =" + i);

			//creates a string with the FabonacciList
			var FibonacciArray = new Array;

		
			function createFab(){
				temp = (first + second);
				first = second;
				second = temp;

				fib = fib + ', ' + second;
			};

			createFab();

			
			//console.log("this is the semi-local i: "+ i++);
			console.log(i);

			//creates (and stores) F0... & Fab# data in two strings of table cells 

			function storeTableInfo(){

				//counter = counter +1; 
				console.log("value of i, inside counter: " + i);

				var topCellNode = "F" + (i + 1);
				row1 +='<td>' + topCellNode + '</td>';

				var bottomCellNode = second;
				row2 +='<td>' + bottomCellNode + '</td>';

			};

			storeTableInfo();
			
		}

		function printTable(){
			document.getElementById('row1').innerHTML = row1;
			document.getElementById('row2').innerHTML = row2;
			
			//failed attempt to 
			//document.getElementByTag('td').style.border="solid black 1px";
		};

		if (checkedRadio == "table"){
			printTable();
		}
		else if (checkedRadio == "consol"){
			console.log(fib);
		}
	

	}
};

//creates a Fibonacci array with the number of entries = parameters

function getFibonacciArray(fibCount){
	//var fibCount = 20
	//document.getElementById('fibCount').value;
	var FibonacciArray = new Array(0, 1, 1);

	var first = 0, second = 1;	

	for (i = 2; i < (fibCount); i++){

		temp = first + second;
		first = second;
		second = temp;

		FibonacciArray[i] = second;

	}
	console.log(FibonacciArray);

	//for copies all of the attributes in the array and prints them below the table on the page

	for (var x in FibonacciArray){
		var fibList = (FibonacciArray[x] + "<br>");
		var output = document.getElementById('output');
		output.innerHTML += fibList;
	}

};

//This calls the getFibonacciArray function and passes the fibCount parameter to it.

function displayFibonacciArray(fibCount){
	getFibonacciArray(fibCount);
};

//Tests whether function works on its own with a fixed parameter. Next step, getting it to work passing a parameter within the getInput function.
//displayFibonacciArray(20);

