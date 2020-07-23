// By syed ali jawwad zaidi 


// chapter 1

//Solution 1
alert('Welcome to chapter 1 to 20 solutions! syed ali jawwad here');

//Solution 2
alert('Error! Please enter a valid password. ');

//Solution 3
alert('Welcome to JS Land...\nHappy Coding');

// Solution 4
alert('Welcome to JS Land...');

//Solution 4
alert('Happy Coding!');

//Solution 5
console.log(alert('Hello... I can run JS through my web browser\'s console'));

// CHAPTER NO 2

//Solution1
var username;

//Solution2
var myName = 'Syed Ali Jawwad Zaidi';

//Solution3
var message = 'Hello World';
alert(message);


//Solution4
var studentName, studentaAge, studentEducation;
studentName = 'syed ali jawwad zaidi';
studentaAge = '15 years old';
studentEducation = 'Certified Mobile and Web Application Development';

alert(studentName);
alert(studentaAge);
alert(studentEducation);

//solution 5
var pizzaLoop = 'PIZZA\nPIZZ\nPIZ\nPI\nP';
alert(pizzaLoop);

//Solution 6
var email = 's.alijawwad1@gmail.com';
alert('My email address is ' + email);

//Solution 7
var book = 'A smarter way to learn JavaScript';
alert('I am trying to learn from the Book ' + book);

// //Solution 8
document.write('Yah! I can write HTML content through JavaScript');

// //Solution 9
var string9 = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
alert(string9);


// CHAPTER NO 3

//Solution 1
var age;
age = '22';
alert(age);

//Solution 2
var track;
track = 'You have visited this site 14 times';
alert(track);

//Solution 3
var birthYear;
birthYear = 1997;
document.write("My birth year is" + birthYear +   "<br> Data type of my declared variable is number");

//Solution 4
var visitorName, product, quantity;
visitorName = 'Syed Ali Jawwad';
product = 'T-shits';
quantity = 7;
document.write('<br>');
document.write('<b>' + visitorName + '</b>'+ ' ordered ' + '<b>' + quantity +'</b>' + ' ' + '<b>' + product + '</b>' + ' on AliExpress.com');


// CHAPTER NO 4

// Q # 1
var name, age, DOB;

// Q # 2
var firstName, lastName, course, university, semester;

// Q # 3
// a)
document.write("<h1>Rules for naming JS variables</h1><br /><br />");
// b)
document.write("Variable names can only contain, number, $ and _. For example $my_1stVariable");
// c)
document.write("<br />Variables must begin with a letter, $ or _. For example $name, _name or name");
// d)
document.write("<br />Variable names are case sensitive");
// e)
document.write("<br />Variable names should #t be JS keywords");


// CHAPTER NO 5

// Q # 1
var x = 4;
var y = 5;
document.write("Sum of ".concat(x, " + ", y, " is ", x+y));

//Q # 2
document.write("<br /><br />Subs of ".concat(x, " - ", y, " is ", x-y));
document.write("<br />Multiplication of ".concat(x, " x ", y, " is ", x*y));
document.write("<br />Division of ".concat(x, " / ", y, " is ", x/y));
document.write("<br />Modulus of ".concat(x, " % ", y, " is ", x%y));

// Q # 4
var ticketPrice = 600;
document.write("<br /><br />Total Cost to buy 5 tickets to a movie is ".concat(ticketPrice*5, "PKR"));

// Q # 5
var table = 4;
document.write("<br /><br />Table of ".concat(table, "<br />"));
for (var i=1; i<11; i++){
    document.write(table+" ".concat("x ", i, " =", table*i, "<br />"));
}

// Q # 6
var celcius = 25;
var fahrenhiet = 70;

var c = (fahrenhiet - 32) * (5/9);
var f = (celcius * (9/5)) + 32;
document.write("<br />");
document.write(celcius+"<sup>o</sup>C is ".concat(f, "<sup>o</sup>F"));
document.write("<br />"+fahrenhiet+"<sup>o</sup>F is ".concat(c, "<sup>o</sup>C"));

// Q # 7
var priceOne = 650;
var priceTwo = 100;
var orderedQuantityOfOne = 3;
var orderedQuantityOfTwo = 7;
document.write("<br /><br />Price of item 1 is ".concat(priceOne));
document.write("<br />Quantity of item 1 is ".concat(orderedQuantityOfOne));
document.write("<br />Price of item 2 is ".concat(priceTwo));
document.write("<br />Quantity of item 2 is ".concat(orderedQuantityOfTwo));
document.write("<br /><br />Total cost of your order is ".concat((priceOne*orderedQuantityOfOne) + (priceTwo*orderedQuantityOfTwo)));

// Q # 8
var totalMarks = 980;
var obtainedMarks = 804;
document.write("<br /><br />Total Marks: ".concat(totalMarks));
document.write("<br />Obtained Marks: ".concat(obtainedMarks));
document.write("<br />Percentage: ".concat((obtainedMarks/totalMarks) * 100), "%");

// Q # 9
var dollar = 10;
var riyal = 25;

// Dollar & Riyal rate at 3/6/2020

document.write("<br /><h1>Currency in PKR</h1>")
document.write("<br /><br />Total Currency in PKR: ".concat((dollar*164.75)+(riyal*43.88)));

// Q # 10
var number = 9;
document.write("<br /><br />Final Answer is ".concat(((number+5)*10)/2));

// Q # 11
var currentYear = 2020;
var birthYear = 1999;
var yourAge = currentYear - birthYear;
document.write("<br /><h1>Age Calculator</h1>");
document.write("<br /><br />Current Year: ".concat(currentYear));
document.write("<br />Birth Year: ".concat(birthYear));
document.write("<br />They are either ".concat(yourAge - 1, " or ", yourAge, " year old"));
document.write("<br />Your Age is: ".concat(yourAge));

// Q # 12
var radius = 20;
var cirOfCircle = 2 * Math.PI * radius;
var areaOfCircle = Math.PI * Math.pow(radius, 2);
document.write("<br/><h1>The Geometrizer</h1>");
document.write("<br /><br />Radius of a Circle: ".concat(radius));
document.write("<br />Circumference is: ".concat(cirOfCircle));
document.write("<br />The area is: ".concat(areaOfCircle));

// Q # 13
var favSnack = "Lays";
var currAge = 21;
var maxAge = 60;
var estAmmount = 5;
var totalForLife = (maxAge - currAge) * 2;
document.write("<br /><br />Favorite Snack: ".concat(favSnack));
document.write("<br />Current Age: ".concat(currAge));
document.write("<br />Estimated Maximum Age: ".concat(maxAge));
document.write("<br />Amount of snack per day: ".concat(estAmmount));
document.write("<br />you will need ".concat(totalForLife, " ", favSnack, " to last you until the ripe old age of ", maxAge));


// CHAPTER NO 06 TO 09

//Q # 1
var a=10;
document.write("Result");
document.write("<br />The value of a is: ".concat(a));
document.write("<br />....................................<br />");
document.write("<br />The value of ++a is: ".concat(++a));
document.write("<br />#w the value of a is: ".concat(a));
document.write("<br /><br />The value of a++ is: ".concat(a++));
document.write("<br />#w the value of a is: ".concat(a));
document.write("<br /><br />The value of --a is: ".concat(--a));
document.write("<br />#w the value of a is: ".concat(a));
document.write("<br /><br />The value of a-- is: ".concat(a--));
document.write("<br />The value of a is: ".concat(a));

// Q # 2
var a=2, b=1;
document.write("<br /><br />--a = ".concat(--a));
document.write("<br />--a - --b = ".concat((--a)-(--b)));
document.write("<br />--a - --b + ++b = ".concat((--a)-(--b)+(++b)));
document.write("<br />--a - --b + ++b + b-- = ".concat((--a)-(--b)+(++b)+(b--)));
document.write("<br />a is = ".concat(a));
document.write("<br />b is = ".concat(b));
var result=(--a)-(--b)+(++b)+(b--);
document.write("<br />result is = ".concat(result));

//Q # 3
var uname = prompt("what is your name:");
document.write("<br /><br />Assalam-u-Alaikum, ".concat(uname));

//Q # 4
document.write("<br /><br />");
var numForTable = prompt("Enter any number to generate its Table:");
if (numForTable === "") {
    for (var i=1; i<11; i++) {
        document.write("5 x ".concat(i, " = ", 5*i, "<br />"));
    }
}
else {
    for (var j=1; j<11; j++) {
        document.write(numForTable+" x ".concat(j, " = ", numForTable*j, "<br />"));
    }
}

//Q # 5
var subjectOne = prompt("First Subject Name"), subjectTwo = prompt("Second Subject Name"), subjectThree = prompt("Third Subject Name");
var totalMarksForEachSub = 100;
var ObtMarksSubOne = prompt("Obtained Marks For Subject One"), ObtMarksSubTwo = prompt("Obtained Marks For Subject Two");
var ObtMarksSubThree = prompt("Obtained Marks For Subject Three");
document.write("<br /><br />");
document.write("<b>Subjects</b> <b>Total Marks</b> <b>Obtained Marks</b> <b>Percentage</b>");
document.write("<br />".concat(subjectOne, " ", totalMarksForEachSub, " ", ObtMarksSubOne, " ", (ObtMarksSubOne/totalMarksForEachSub)*100));
document.write("<br />".concat(subjectTwo, " ", totalMarksForEachSub, " ", ObtMarksSubTwo, " ", (ObtMarksSubTwo/totalMarksForEachSub)*100));
document.write("<br />".concat(subjectThree, " ", totalMarksForEachSub, " ", ObtMarksSubThree, " ", (ObtMarksSubThree/totalMarksForEachSub)*100));


// CHAPTER NO 09 TO 11

//Q # 1
var city = prompt("Enter city name:");
if (city === "karachi" || city === "Karachi") {
    alert("Welcome to city of lights");
}
else {
    alert("#t Karachi..!");
}

// Q # 2
var gender = prompt("Enter Your Gender:");
if (gender === "male" || gender === "Male") {
    alert("Good Morning Sir");
}
else if (gender === "female" || gender === "Female") {
    alert("Good Morning Ma’am");
}
else {
    alert("Please! Enter Male or Female...!");
}

// Q # 3
var signal = prompt("Selecet a Traffic Signal :");
if(signal === "red" || signal === "Red") {
    alert("Vehicles Must Stop");
}
else if(signal === "yellow" || signal === "Yellow") {
    alert("Vehicles should get ready to move");
}
else if(signal ==="green" || signal==="Green") {
    alert("Vehicles can move #w");
}
else {
    alert("Wrong Signal !! ");
}

//Q # 4
var fuel = prompt("Input remaining fuel in car (in litres)");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car")
}
else {
    alert("Fuel is OK!");
}

//Q # 5
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

//Q # 6
var sub1 = prompt("Enter Marks of subject 1 : ");
var sub2 = prompt("Enter Marks of Subject 2 : ");
var sub3 = prompt("Enter Marks of Subject 3 : ");

sub1 = parseInt(sub1);
sub2 = parseInt(sub2);
sub3 = parseInt(sub3);
var tmarks=(sub1 + sub2 + sub3 );
var per = (tmarks/300)* 100;
document.write("<h1>Marks Sheet</h1>")
if(per >= 80) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ",tmarks,"<br/>Percentage : ",per,"%<br/>Grade is A-one <br/>Remarks : Excelent");
}
else if(per >= 70) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ",tmarks,"<br/>Percentage : ",per,"%<br/>Grade is A <br/>Remarks : Good");
}
else if(per >= 60) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ",tmarks,"<br/>Percentage : ",per,"%<br/>Grade is B <br/>Remarks : You need to improve");
}
else if(per < 60) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ",tmarks,"<br/>Percentage : ",per,"%<br/>Grade is Fail <br/>Remarks : Sorry");
}

//Q # 7
alert("Guess Game :");
var n = prompt("Select a number from a range of 1 to 10 ");
if(n === 4) {
    alert("Bingo! Correct");
}
else if (n>4) {
    n--;
    alert("Close Enough to correct answer, Your answer is Greater");
    } 
else if(n<4) {
    n++;
    alert("Close Enough to correct answer, Your Answer is Lesser");
}

//Q # 8
var divByThree = prompt("Enter the number");
if (divByThree % 3 === 0) {
    alert("Number is Divisible by 3");
}
else {
    alert("Number is #t Divisible by 3");
}

//Q # 9
var oddEven = prompt("Enter the Number");
if (oddEven % 2 === 0) {
    alert("Number is Even");
}
else {
    alert("Number is Odd");
}

//Q # 10
alert("Weather Report");
var temp = prompt("Enter Temperature :");
if(temp > 40) {
    document.write("It is too hot outside");
}
else if(temp >30) {
    document.write("<br/>The Weather today is #rmal");
}
else if(temp>20) {
    document.write("<br/>Today's Weather is Cool");
}
else if(temp > 10) {
    document.write("<br/>OMG!! Today's Weather is so cool");
}

//Q # 11
alert("Calculator");
var number1 = prompt("Enter Number 1 :");
var number2 = prompt("Enter Number 2 :");
var opr = prompt("Enter Operator : <br/>+ for Addition<br/>- for Subtraction<br/>* for Multiplication<br/>/ for Division");
number1 = parseInt(number1);
number2 = parseInt(number2);
if (opr == "+") {
    alert("Addition is "+(number1+number2));
}
else if(opr == "-") {
    alert("Subtraction is "+(number1-number2));
}
else if(opr =="*") {
    alert("Multiplication is "+(number1*number2));
}
else if(opr =="/") {
    alert("Division is "+(number1/number2));
}

// CHAPTER NO 12-13

//Q # 1
var char = prompt("Enter only single character :");
if(char >= 'A' && char <='Z') {
        alert("Capital letter ");
}
else if(char >='a' && char <= 'z') {
    alert("small letter");
}
else  {
    alert("Number");
}

//Q # 2
var num1 = prompt("Enter Number 1 :");
var num2 = prompt("Enter Number 2 :");
if(num1 > num2) {
    alert(num1+" is Greater ");
}
else if(num2 > num1) {
            alert(num2+" is Greater ");
}
else if(num1 === num2) {
    alert("Both "+num1+" and "+num2+" is Equal");
}

//Q # 3
var numb3 = prompt("Enter a number");
if(numb3 === 0) {
    alert("Zero");
}
else if(numb3 > 0) {
    alert("It is a positive number");
}
else {
    alert("It is a negative number");
}

//Q # 4
var ch = prompt("Enter a character to check it's vowel or consonent :");
if((ch == 'a' || ch =='e' || ch == 'i' || ch=='o' || ch == 'u') ||( ch == 'A' || ch =='E' || ch == 'I' || ch=='O' || ch == 'U')) {
    alert("true, Character is Vowel");
}
else {
    alert("false, Character is #t Vowel");  
}

//Q # 5
var corrPassword = "saad123";
var userPassword = prompt("Enter Your Password");
if(userPassword == "") {
    alert("Please Enter Your Password");
}
else if(userPassword === corrPassword) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password")
}

//Q # 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
}
else {
    greeting = "Good evening";
    alert(greeting);
}

//Q # 7
var userTime = prompt("Enter a time in 24 hour clock format. Like: 1900 = 7pm");

if(userTime >= 0000 && userTime < 1200) {
    alert("Good Mornig!");
}
else if(userTime >= 1200 && userTime < 1700) {
    alert("Good After#on!");
}
else if(userTime >= 1700 && userTime < 2100) {
    alert("Good Evening!");
}
else if(userTime >= 2100 && userTime <= 2359) {
    alert("Good Night!");
}
else {
    alert("Enter a valid time.");
}

// CHAPTER 14-16

//Q # 1
var stdInfo = [];

//Q # 2
var studInfo = new Array();

//Q # 3
var name = ["saad hashim", "jawwad", "zohaib"];

//Q # 4
var ages = [21, 23, 19];

//Q # 5
var booleanArray = [true, false];

//Q # 6
var mixedArray = ["saad hashim", 21, true];

//Q # 7
var quaInPak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("Qualifications:<br />");
for (var i=0; i<quaInPak.length; i++) {
    document.write((i+1)+") ".concat(quaInPak[i], "<br />"));
}

//Q # 8
var stdName = ["saad", "Huzaifa", "hashim"];
var stdScore = [230, 480, 320];
var totalMarks = 500;
document.write("<br /><br />");
for (var i=0;i<stdName.length;i++) {
    document.write("Score of ".concat(stdName[i]," is ", stdScore[i], ". Percentage: ", (stdScore[i]/500)*100, "%<br />"));
}

//Q # 9
var colors =[];
colors = ["red","green","blue","yellow"];
// a
var a = prompt("What color do you want to enter in the begining : ");        
document.writeln("<br /><br />"+colors[0]+","+colors[1]+","+colors[2]+","+colors[3]+"<br />");
colors.unshift(a);
document.writeln(colors[0]+","+colors[1]+","+colors[2]+","+colors[3]+","+colors[4]);
// b
var b = prompt("What color do you want to enter in the end : ");
document.writeln("<br /><br />"+colors[0]+","+colors[1]+","+colors[2]+","+colors[3]+"<br />");
colors.push(b);
document.writeln(colors[0]+","+colors[1]+","+colors[2]+","+colors[3]+","+colors[4]);
// c
colors.unshift("purple");
colors.unshift("pink");
document.writeln("<br/> <br />"+colors[0]+","+colors[1]+","+colors[2]+","+colors[3]+","+colors[4]+","+colors[5]+","+colors[6   ]);
//d
colors.shift();
document.writeln(colors[0]+","+colors[1]+","+colors[2]+","+colors[3]);
//e
colors.pop();
document.writeln(colors[0]+","+colors[1]+","+colors[2]+","+colors[3]);
var ask1 = prompt("At which index you want to Add new Color :");
var askcolor = prompt("what color you want to Add :");    
colors.splice(ask1,1,askcolor);
document.writeln(colors[0]+","+colors[1]+","+colors[2]+","+colors[3]);
//f
var ask2 = prompt("To Index :");
var ask3 = prompt("From Index :");    
//g
colors.splice(ask2,ask3);
for(var i=0;i<colors.length;i++) {
    document.writeln("<br />"+colors[i]+",");
}

//Q # 10
document.write("<br /><br />");
var scoreOfStd = [320, 230, 480, 120];
document.write(scoreOfStd+"<br />");
document.write(scoreOfStd.sort());

//Q # 11
document.write("<br /><br />");
var cities = ["Karachi", "Lahore", "Multan", "Peshawar", "Islamabad"];
var selectedCities = cities.slice(2, 4);
document.write(cities+"<br />");
document.write(selectedCities);

//Q # 12
document.write("<br /><br />");
var arr = ["This", "is", "my", "cat"];
var joinArr = arr.join(" ");
document.write(arr+"<br />");
document.write(joinArr);

//Q # 13
var newArr = [];
newArr.push("Keyboard","Mouse","Printer","Monitor")
document.writeln("<br /><br />Devices :");
for(var i=0;i<newArr.length;i++) {
    document.writeln(newArr[i]+" ");
}
for(var i=0;i<4;i++) {
    document.writeln("<br/>OUT : "+newArr[i]);
}

//Q # 14
var newArr = [];
newArr.push("Keyboard","Mouse","Printer","Monitor")
document.writeln("<br /><br />Devices :");
for(var i=0;i<newArr.length;i++) {
    document.writeln(newArr[i]+" ");
}
for(var i=0;i<4;i++) {
    document.writeln("<br/>OUT : "+newArr.pop());
}

//Q # 15
var up = document.getElementById('geeks'); 
		var down = document.getElementById('gfg'); 
		var select = document.getElementById("arr"); 
		var elmts = ["Apple","Samsung","Motorola","#kia","Sony","Haier"];
		up.innerHTML = "Click on the button to " 
					+ "perform the operation"+ 
					".<br>Array - [" + elmts + "]"; 

		// Main function 
		function GFG_Fun() { 
			for (var i = 0; i < elmts.length; i++) { 
				var optn = elmts[i]; 
				var el = document.createElement("option"); 
				el.textContent = optn; 
				el.value = optn; 
				select.appendChild(el); 
			} 
			down.innerHTML = "Elements Added"; 
        }
        
// CHAPTER 17-20
//Q # 1
var multiArr = [[]];

//Q # 2
var multiArrTwo = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
for (var i=0; i<multiArrTwo.length;i++) {
    document.write(multiArrTwo[i]+"<br />");
}

//Q # 3
document.write("<br />");
for (var i=1; i<11; i++) {
    document.write(i+"<br />");
}

//Q # 4
var mulTable = prompt("enter the number to show its multiplication table");
var lenTable = prompt("Enter the length of table");
document.write("<br /><br />Multiplication table of ".concat(mulTable, "<br />Length ", lenTable, "<br />"));
for (var i=1; i<=lenTable; i++) {
    document.write(mulTable+" x ".concat(i, " = ", mulTable*i, "<br />"));
}

//Q # 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<br/><br/>");
for (var i=0;i<fruits.length;i++) {
    document.write(fruits[i]+"<br />")
}
document.write("<br />");
for (var i=0;i<fruits.length;i++) {
    document.write("Element at index".concat(i, " is ", fruits[i], "<br />"));
}

//Q # 6
document.write("<br /><br />");
document.write("<b>counting:</b><br />")
for (var i=1; i<16; i++) {
    document.write(i+",");
}
document.write("<br /><b>Reverse counting:</b><br />");
for (var i=10; i>0; i--) {
    document.write(i+",");
}
document.write("<br /><b>Even:</b><br />");
for (var i=0;i<=20;i=i+2) {
    document.write(i, ",");
}
document.write("<br /><b>Odd:</b><br />");
for (var i=1;i<=20;i=i+2) {
    document.write(i, ",");
}
document.write("<br /><b>Series:</b><br />");
for (var i=2;i<=20;i=i+2) {
    document.write(i, "k ");
}

//Q # 7
document.write("<br/><h1>Searching Example :</h1>")
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter For search :");
for(var i = 0;i<A.length;i++){
    if(search === A[i]) {
        document.write(search," is available at index ",i);
        break;
    }
    else {
        document.write(search," is #t available ");
        break;
    }
}

//Q # 8
document.write("<br />");
var ArrayLarge = [24, 53, 78, 91, 12]
var largestNumber = 0;
for(var i=0;i<ArrayLarge.length;i++) {
    if(largestNumber <= ArrayLarge[i])
        largestNumber = ArrayLarge[i];
}
document.write("<br/><br/> List Item in Array : ".concat(ArrayLarge));
document.write("<br/>Largest Number is :",largestNumber);

//Q # 9
document.write("<br />");
var Arraysmall = [24, 53, 78, 91, 12];
var smallestNumber = Arraysmall[0];
for(var i=0; i<Arraysmall.length; i++) {
    if(Arraysmall[i] < smallestNumebr)
        smallestNumber = Arraysmall[i];
}
document.write("<br/>List Item in Array : ".concat(Arraysmall));
document.write("<br/>Smallest Number is :",smallestNumber);

//Q # 10
document.write("<br />");
for (var j=5; j<101; j=j+5) {
    document.write(j+",")
}