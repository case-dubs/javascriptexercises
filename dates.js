//Accesses the ul lists from day-to-day.html

monthData = document.getElementById('allTheMonths');
dayData = document.getElementById('allTheDays');
yearData = document.getElementById('allTheYears');


//Creates an array this lists  1 - 12

var monthList = new Array('');

for (i = 0; i < 12; i ++){
	monthList[i]=i+1;
	/* //tests to make sure the the month list array holds the right values
	console.log("Months in the year: " + monthList);*/

	var monthLister = ('<option value=' + '\'' + monthList[i] +  '\'' + '>' + monthList[i] + '</option');
	//prints each number in the month array as an li in the monthList on day-to-day.html
	monthData.innerHTML += monthLister;
}

//Creates an array that is a list of 1 - 31
var dayList = new Array('');

for (i = 0; i<31; i++){
	dayList[i] = i+1;
	//tests to make sure the the day list array holds the right values
	//console.log("Days in the month: " + dayList);

	var dayLister = ('<option value=' + '\'' + dayList[i] +  '\'' + '>' + dayList[i] + '</option');
	dayData.innerHTML += dayLister;
}


//Gets current date
var now = new Date();
//Figures out current year of user
var thisYear = now.getFullYear();
//Calculates 100 years before current year
var startYear = thisYear - 100;

//console.log("This year is: " + thisYear);

//creates an rray that is a list of the past 100 years acending
var yearList = new Array ('');

for (i = 0; i< 100; i++){
	year = (thisYear-- + 1);
	yearList[i] = year;
	var yearLister = ('<option value=' + '\'' + yearList[i] +  '\'' + '>' + yearList[i] + '</option');
	yearData.innerHTML+= yearLister;
}
/*//tests to make sure the the year list array holds the right values
console.log("List of the past 100 years: " + yearList);*/


function dateToDay(){
	
	//gets the selected values of day, month, year that the user has chosen

	var chosenDay = document.getElementById('allTheDays').value;
	var chosenMonth = document.getElementById('allTheMonths').value;
	var chosenYear = document.getElementById('allTheYears').value;

	console.log("here's what's chosen: " + chosenDay + ", " + chosenMonth + ", " + chosenYear);

	//if feb is chosen, asseses whether it was a leap year...
	if(chosenMonth == 2 && (chosenYear%4) !== 0 && chosenDay > 28){
		alert("invalid date! There are only 28 days in February this year (it's not a leap year)");
	}
	else if(chosenMonth == 2 && (chosenYear%4) == 0 && chosenDay > 29){
		alert("Invalid date! There are only 29 days in February this year (it's a leap year)");
	}
	else if (chosenMonth == 4 && chosenDay > 30){
		alert("invalid date. There are only 30 days in April!");
	}
	else if (chosenMonth == 6 && chosenDay > 30){
		alert("invalid date. There are only 30 days in June!");
	}
	else if (chosenMonth == 9 && chosenDay > 30){
		alert("invalid date. There are only 30 days in September!");
	}
	else if (chosenMonth == 11 && chosenDay > 30){
		alert("invalid date. There are only 30 days in November!");
	}
	else{
		var chosenDate = new Date(chosenYear + ', ' + chosenMonth + ', ' + chosenDay)
		console.log("this is the chosen date in else: " + chosenDate);
		var numberOfDay = chosenDate.getDay();
		var nameOfDay = weekday[numberOfDay];
		alert(chosenDate + " was a " + nameOfDay);

	}

};

//This array assigns word names to numeric days from the Date() method

var weekday=new Array(7);
weekday[0]="Monday";
weekday[1]="Tuesday";
weekday[2]="Wednesday";
weekday[3]="Thursday";
weekday[4]="Friday";
weekday[5]="Saturday";
weekday[6]="Sunday";
