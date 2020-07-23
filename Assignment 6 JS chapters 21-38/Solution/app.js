//Chapter 21 - Chapter 25
document.write(`<h2> Chapter 21 - Chapter 25 </h2>`);
//1
let firstName = prompt("First name:");
let LastName = prompt("Last name:");

let fullName = firstName + LastName;
alert(`Greetings! ${fullName}`);

//2
let userMobile = prompt("What is your favourite cellphone?");

document.write(`My favoriet phone is: ${userMobile} <br/>
Length of string: ${userMobile.length}`);

// //3
const pakistani = "Pakistani";
document.write(`String: ${pakistani} <br /> The index of 'n' is: ${pakistani.indexOf('n')} <br /> <br />`);

// //4
const helloWorld = "Hello World";
document.write(`String: ${helloWorld} <br /> The last index of letter 'l' is: ${helloWorld.lastIndexOf('l')} <br /> <br />`);

// //5
document.write(`String: ${pakistani} <br /> The character at index '3' is: ${pakistani.charAt(3)} <br /> <br />`);

//6
let con_FirstName = prompt("first name: ");
let con_LastName = prompt("Last name: ");
let con_fullName = con_FirstName.concat(con_LastName);
alert(`Greetings Using Concat! ${con_fullName}`);

//7
let city = "Hyderabad";
document.write(`City: ${city} <br /> After replacement: ${city.replace('Hyder', 'Islam')} <br/> <br/>`);

// //8
var message = "Ali and Sami are best friends.They play cricket and football together."; 

document.write(`Replaced all 'and' with '&' in: ${message.replace(/and/g, '&')}<br/> <br/>`);

//9
let stringValue = '472';
let convertedValue = parseInt(stringValue);

document.write(`Value: ${stringValue} <br/> Type: String <br/> Value: ${convertedValue} <br/> Type: number <br/> <br/>`);

//10
let userInput = prompt('Enter string to get it transformed to UPPERCASE');
document.write(`String: ${userInput} <br/> Transformed to UPPERCASE: ${userInput.toUpperCase()} <br/> <br/>`);

//11
let userInput_1 = prompt('Enter string to get it transformed to Title Case');
document.write(`Transformed to Title Case: ${userInput_1.toLocaleUpperCase()} <br/> <br/>`);

//12
var num = 35.36;
document.write(`Number: ${num} <br/> Converted to 'String': ${num.toString()} <br/>`);

//13
let userInput_2 = prompt('Enter username: ');
if (userInput_2.includes('@') || userInput_2.includes('!') || userInput_2.includes('.') || userInput_2.includes(',') ) {
    alert('Enter valid username!');
}

//14
var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userInput_3 = prompt('Welcome to the bakery. What do you want to order sir/ma\'am');

var sameCaseArray = A.map(value => value.toLowerCase());
sameCaseArray.includes('samantha'); // true
sameCaseArray.indexOf('samantha') !== -1; // true
var caseArray = A.some(value => value.toLowerCase() === userInput_3);
for (var i = 0; i < A.length; i++) {
    if (caseArray) {
        console.log(userInput_3 + " " + A[i]);
        alert(`Avaiable`);
        break;
    }
    else {
        alert(`Not Avaiable`);
        break;
    }
}

//15
var password = prompt('Enter password: ');
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function validatePassword(password) {
    if (password == "") {
        alert(`Error! Password cannot be blank!`);
    }
    re = /^\w+$/;
    if (!re.test(password)) {
        alert(`Error! Password must contain only letters and numbers`);
    }

    if (password != "") {

        if (password.length < 6) {
            alert(`Error! Password must contain at least six characters!`);
            }
        re = /[0-9]/;
        if (!re.test(password)) {
            alert(`Error! password must contain at least one number!`);
            }
        re = /[a-z]/;
        if (!re.test(password)) {
            alert(`Error! password must contain at least one lowercase letter!`);
            }
        re = /[A-Z]/;
        if (!re.test(password)) {
            alert(`Error! password must contain at least one uppercase letter!`);
        }
        for (var i = 0; i < numbers.length; i++) {
            if (parseInt(password.charAt(0)) === numbers[i]) {
                alert('Error! Password must not start with a number!');
                break;
            }
        }
    } else {
        alert(`Your password is valid and strong.` );
     
    }


}

validatePassword(password);

//16
var university = 'Uiversity of Karachi';
var splitArray = university.split('');

for (var i = 0; i < splitArray.length; i++) {
 
        document.write(`<br/> ${splitArray[i]}`);

}

// //17
var pakistan = 'Pakistan';
document.write(`<br/><br/> User input: ${pakistan} <br/> Last character of input: ${pakistan.charAt(pakistan.length - 1)}<br/><br/>`);

var quickString = 'the quick brown fox jumps over the lazy dog';
quickString = quickString.toLowerCase();
function countOccurences(string, word) {
    return string.split(word).length - 1;
}

var count = countOccurences(quickString, 'the');


document.write(`Text: The quick brown fox jumps over the lazy dog <br/> No of occurerrences: ${count} <br/><br/>`);

//Chapter 26 - Chapter 30
document.write(`<h2> Chapter 26 - Chapter 30 </h2>`);
// //1
var positive = parseInt(prompt('Enter a number: '));
document.write(`Number: ${Math.abs(positive)} <br/> Round off value: ${Math.abs(Math.round(positive))} <br/> Floor value: ${Math.abs(Math.floor(positive))} <br/> Ceil value: ${Math.abs(Math.ceil(positive))} <br/> <br/>`);

// //2
var negative = parseInt(prompt('Enter a number: '));
document.write(`Number: ${-Math.abs(negative)} <br/> Round off value: ${-Math.abs(Math.round(negative))} <br/> Floor value: ${-Math.abs(Math.floor(negative))} <br/> Ceil value: ${-Math.abs(Math.ceil(negative))} <br/> <br/>`);

// //3
var absValue = parseInt(prompt('Enter a number: '));
document.write(`The absolute value of ${absValue} is ${Math.abs(absValue)} <br/> <br/>`);

// //4
document.write(`Random dice value: ${Math.ceil(Math.random() * 6)} <br/>`);
document.write(`Random dice value: ${Math.ceil(Math.random() * 6)} <br/><br/>`);

// //5
document.write(`Random coin value: ${Math.ceil(Math.random() * 2)} <br/>`);
document.write(`Random coin value: ${Math.ceil(Math.random() * 2)} <br/><br/>`);

// //6
document.write(`Random number between 1 and 100: ${Math.ceil(Math.random() * 100)} <br/><br/>`)

//7
let weight = prompt('Enter your weight in kilograms');
document.write(`The weight of user is: ${parseFloat(weight)}kgs <br/><br/>`);

//8
let userInput_random = prompt('Enter a number between 1 and 10');
if (Math.ceil(Math.random() * 10) === parseInt(userInput_random)) {
    alert(`Congratulations your ${userInput_random} has matched`);
} else {
    alert('Try again!');
}



//Chapter 31 - Chapter 34
document.write(`<h2> Chapter 31 - Chapter 34 </h2>`);
//1
document.write(`<br/><br/> ${Date()}`);

//2
var months = [`January`, `February`, `March`, `April`, `May`, `June`,
    `July`, `August`, `September`, `October`, `November`, `December`
];

var currMonth = new Date().getMonth();
alert(`Current month:  ${months[currMonth]}`);

//3
var days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];

var currDay = new Date().getDay();
alert(`Today is:  ${days[currDay]}`);

//4
var days = [`It's Fun day`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `It's Fun day`];

var currDay = new Date().getDay();
alert(days[currDay]);

//5
var currDay_1 = new Date().getDate();
if (currDay_1 < 16) {
    alert(`First fifteen days of the month`);
} else {
    alert(`Last days of the month`);
}

//6
var currDate_1 = new Date();
var mili = new Date('1970-01-01').getMilliseconds();
var difference_Mili = currDate_1 - mili;
var minutes = new Date('1970-01-01').getMinutes();
var difference_Minutes = currDate_1 - minutes;

document.write(`<br/> <br/> Current Date: ${currDate_1} <br/> Elapsed milliseconds since January 1, 1970: ${difference_Mili}milliseconds <br/> Elapsed minutes since January 1, 1970: ${difference_Minutes}minutes`);

//7
var hours = new Date().getHours();
if (hours < 12) {
    document.write(`<br/> <br/> It's A.M`);
} else {
    document.write(`<br/> <br/> It's P.M`);
}

//8
var laterDate = new Date('2020-12-31');
document.write(`<br/> <br/> Later Date: <b>${laterDate}</b>`);

//9
var ramadanDate = new Date("06/18/2015");
var now = new Date();
var Time_Difference = now.getTime() - ramadanDate.getTime();
var Days_Difference = Time_Difference / (1000 * 3600 * 24);
var Days_Difference = Math.round(Days_Difference); 
document.write(`<br/> <br/> <b>${Days_Difference}</b> days have passed since 1st Ramadan, 2015`);

//10
var dec2015 = new Date("01/01/2015");
var now_1 = new Date();
var time_Difference1 = now_1.getTime() - dec2015.getTime();
var seconds_Difference = (time_Difference1 / 1000);
document.write(`<br/> <br/> <b>${seconds_Difference}</b> seconds have passed since the beggining of 2015`);

//11 
var setHour = new Date();

document.write(`<br/> <br/> current date: ${Date()} <br/> An hour ago, it was ${setHour.getHours() - 1}`);

//12
var YearsFromNow = new Date();
alert(`current date: ${YearsFromNow} \n 100 years ago, it was: ${new Date("June 25, 1920 22:17:00")}`);

//13
var age = prompt('Enter your age');
alert(`Your birth year is: ${parseInt(new Date().getFullYear()) - parseInt(age)}`);

//14
var customerName = "Syed Ali Jawwad Zaidi";
var billMonth = new Date().getMonth();
var noOfUnits = 410;
var chargesPerUnit = 16;
var netAmount = noOfUnits * chargesPerUnit;
var LatePaymentCharges = 350;
var GrossAmount = noOfUnits * LatePaymentCharges;
document.write(`<br/> <br/> <h2>K-Electric Bill</h2> Customer Name: ${customerName} <br/> Month: ${billMonth} <br/> Number of units: ${noOfUnits} <br/> Charges per unit: ${chargesPerUnit} <br/> Net Amount Paybal before (${new Date("June 30, 2020 22:17:00")}: ${netAmount} <br/> Late payment surcharge: ${LatePaymentCharges} <br/> Gross Amount Payable after (${new Date("June 30, 2020 22:17:00")}: ${GrossAmount}`);

//Chapter 35 - Chapter 38
document.write(`<h2> Chapter 35 - Chapter 38 </h2>`);
// //1
var getDate = () => {
    let currDate = new Date();
    document.write(currDate);
}
getDate();

//2
let firstName_1 = prompt("First name:");
let LastName_1 = prompt("Last name:");

let fullName_1 = firstName_1 + LastName_1;
alert(`Greetings! ${fullName_1}`);

//3
var num1 = parseInt(prompt('Enter the first number:'));
var num2 = parseInt(prompt('Enter the second number:'));
var getSum = (num1, num2) => {

    return alert(`Sum of two numbers is: ${num1 + num2}`);

}
getSum(num1, num2);

//4
var calculator = (num1, num2, operator) => {
    if (operator == '+') {
        return document.write(`<br/><br/>Addition: ${num1 + num2}`);
    } else if (operator == '-') {
        return document.write(`<br/><br/>Subtraction: ${num1 - num2}`);
    } else if (operator == '*') {
        return document.write(`<br/><br/>Multiplication: ${num1 * num2}`);
    } else if (operator == '/') {
        return document.write(`<br/><br/>Division: ${num1 / num2}`);
    } else if (operator == '%') {
        return document.write(`<br/><br/>Modulous: ${num1 % num2}`);
    } else {
        return document.write('<br/><br/>Invalid inputs!');
    }

}
calculator(8, 2, '+');
calculator(8, 2, '-');
calculator(8, 2, '*');
calculator(8, 2, '/');
calculator(8, 2, '%');

//5
var getSquare = (num) => {
    return document.write(`<br/><br/>Square of your input is: ${num *= num}`);
}
getSquare(9);

//6
var getFactorial = (num) => {
    for (var i = num - 1; i > 1; i--) {
        num *= i;
    }
    document.write(`<br/><br/>Factorial: ${num}`);
}
getFactorial(5);

//7
var counting = (num1, num2) => {
    document.write(`<br/><br/>Counting from ${num1} to ${num2}:`);
    for (var i = num1; i < num2 + 1; i++) {
        document.write(`<br/>${i}`);
    }
}
counting(1, 10);

//8
var calculateHypotenuse = (base, perp) => {
    document.write(`<br/><br/>Hypotenuse: ${Math.sqrt((base * base) + (perp * perp))}`);
    //Math.hypot(base,perp);
}
calculateHypotenuse(3, 4);

//9
var width = 5;
var height = 5;
var calcArea = (width, height) => {
    document.write(`<br/><br/>Area: ${width * height}`);
}
calcArea(5, 4);
calcArea(width, height);

//10
function checkPalindrome(Args) {
    var re = /[\W_]/g;
    var lowRegArgs = Args.toLowerCase().replace(re, '');
    var reverseArgs = lowRegArgs.split('').reverse().join('');
    return document.write(`<br/><br/>Palindrom '${Args}': ${reverseArgs === lowRegArgs}`);
}
checkPalindrome("Madam");

//11
var toUpperCase = (stringArgs) => {
    return stringArgs
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

document.write(toUpperCase(`<br/><br/> the quick brown fox`));

//12
var getLongestWord = (stringArgs) => {
    var strArray = stringArgs.split(' ');
    var length = 0;
    var longestWord;
    for (var i = 0; i < strArray.length; i++) {
        if (length < strArray[i].length) {
            length = strArray[i].length;
            longestWord = strArray[i];
        }
    }
    return document.write(`<br/><br/> <b>The longest Word is:</b> '${longestWord}'`);
}
getLongestWord('Web Development Tutorail');

//13
var char_Occurence = (string, char) => {
    let count = string.split(char).length - 1;
    document.write(`<br/><br/> Text: ${string} <br/> No of occurerrences: ${count}`);

}

char_Occurence('JSResourceS.com', 'o');

//14
var calcArea = (radius) => {
    var area = ((radius * radius) * Math.PI);
    document.write(`<br/><br/> The area is: <b>${area}</b>`);
}

var calcCircumference = (radius) => {
    var circumference = ((2 * Math.PI) * radius);
    document.write(`<br/> The circumference is: <b>${circumference}</b>`);
}

calcArea(4.2);
calcCircumference(4.2);