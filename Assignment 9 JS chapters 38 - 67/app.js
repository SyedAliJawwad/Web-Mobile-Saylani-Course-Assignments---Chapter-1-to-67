//Chapters 38 - 42

//1

function power(a, b) {
    i = 0;
    var result = 1;
    while (i < b) {
        result = result * a;
        i++;
    }
    document.writeln("Base " + a + " with power " + b + " is result : " + result);
}
power(2, 4)

//2

document.write("<br />")
var year = prompt("Enter year");
function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        document.writeln(year + " is leap Year")
    }
    else {
        document.writeln(year + " is not leap Year")
    }
}
checkLeapYear(year);

//3

document.write("<br />")

var a = +prompt("enter value of a");
var b = +prompt("enter value of b");
var c = +prompt("enter value of c");

function calculateS() {
    var S = (a + b + c) / 2;
    return S;
}
function calculateArea() {
    var S = calculateS()
    console.log(S);

    var area = S * ((S - a) * (S - b) * (S - c))
    document.writeln("Area is : " + area);
}

calculateArea()

// 4

document.write("<br />")


var subject1 = +prompt("Enter marks of subject 1 : ");
var subject2 = +prompt("Enter marks of subject 2 : ");
var subject3 = +prompt("Enter marks of subject 3 : ");

function calculateAverage() {
    var average = (subject1 + subject2 + subject3) / 3;

    return average;
}

function calculatePercentage() {
    var obtainedMarks = (subject1 + subject2 + subject3);
    var percentage = (obtainedMarks / 300) * 100;
    return percentage;
}


function mainFunction() {
    var Average = calculateAverage();
    document.writeln("Average marks are : " + Average);

    var Percentage = calculatePercentage();
    document.writeln("<br />Percentage is: " + Percentage + "%")
}

mainFunction()

//6

document.write("<br />")

var text = "this is Syed Ali Jawwad's program'";
var textArr = text.split("")
document.writeln("String before vowels remove: <b>" + text + "</b>")
document.write("<br />")

for (var i = 0; i < textArr.length; i++) {
    if (textArr[i].toLowerCase() === 'a') {
        textArr[i] = "";
    }
    else if (textArr[i].toLowerCase() === 'e') {
        textArr[i] = "";
    }
    else if (textArr[i].toLowerCase() === 'i') {
        textArr[i] = "";
    }
    else if (textArr[i].toLowerCase() === 'o') {
        textArr[i] = "";
    }
    else if (textArr[i].toLowerCase() === 'u') {
        textArr[i] = "";
    }
}
textArr = textArr.join("")
document.writeln("String after removing vowels is: <b>" + textArr + "</b>")



//7

document.write("<br />")

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;

    for (const letter of str.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (haveSeenVowel) {
                        count++;
                        haveSeenVowel = false;
                    } else {
                        haveSeenVowel = true;
                    }
                    break;
                }
            default:
                haveSeenVowel = false
        }
    }
    return count
}
document.writeln("The number of occurrences of any two vowels is :" + findOccurrences())


//8

document.write("<br />")


var distance = +prompt("Enter distance between two cities (KM) :");

function convertToMeter() {
    return distance * 1000;
}

function convertToFeet() {
    return distance * 3280.84;
}

function convertToInches() {
    return distance * 39370.1;
}
function convertToCentimeter() {
    return distance * 100000;
}

document.writeln("<br/>Distance in Meters is : " + convertToMeter())
document.writeln("<br/>Distance in Feets is : " + convertToFeet())
document.writeln("<br/>Distance in Inches is : " + convertToInches())
document.writeln("<br/>Distance in Centimeters is : " + convertToCentimeter())


//9

document.write("<br />")

var salary = +prompt("Enter salary :");
var hours = +prompt("Enter hours :");
var overtime;
var totalSalary;

if (hours > 40) {
    overtime = hours * 12;
}
else {
    overtime = hours;
}
totalSalary = overtime + salary;
document.writeln("Total Salary is : " + totalSalary)



//10

document.write("<br />")

var amountToWithdrawal = +prompt("Enter the amount to widhdrawal :");

document.writeln("<br />Required notes of Rs. 100 is: " + Math.floor(amountToWithdrawal / 100));
document.writeln("<br />Required notes of Rs. 50 is: " + Math.floor((amountToWithdrawal % 100) / 50));
document.writeln("<br />Required notes of Rs. 10 is: " + Math.floor(((amountToWithdrawal % 100) % 50) / 10));




//Chapter 43-48;

var namee = document.querySelector('.name');
var classs = document.querySelector('.class');
function deleteRow() {
    var row = document.querySelector('.tr');
    row.remove();
}

function increaseCounter() {
    var counter = parseInt(document.querySelector('.counter').textContent);

    document.querySelector('.counter').textContent = ++counter;
}

function decreaseCounter() {
    var counter = parseInt(document.querySelector('.counter').textContent);

    document.querySelector('.counter').textContent = --counter;
}

//Chapter 49-53
//1
var firstname = document.querySelector('.firstname');
var lastname = document.querySelector('.lastname');
var email = document.querySelector('.email');
var password = document.querySelector('.password');
var confirmPassword = document.querySelector('.confirm-password');
var displayFormContainer = document.querySelector('.display-form-container');
function displayFormData() {

    displayFormContainer.innerHTML = `<div class="heading">
            <h1>Your Data</h1>
        </div>
        <div class="display-firstname">${firstname.value}</div>
        <div class="display-lastname">${lastname.value}</div>
        <div class="display-email">${email.value}</div>
        <div class="display-password">${password.value}</div>
        <div class="display-confirm-password">${confirmPassword.value}</div>`;
}

//2
function showMore() {
    var lowerContent = document.querySelector('.lower-content');
    var btn_showMore = document.querySelector('.show-more');

    btn_showMore.classList.add('hide');
    lowerContent.classList.toggle('hide');
}

//3
students = [
    {
        id: 0,
        name: "Syed",
        class: "2",
    },
    {
        id: 1,
        name: "Ali",
        class: "1",
    },
    {
        id: 2,
        name: "Jawwad",
        class: "6",
    },
    {
        id: 3,
        name: "Zaidi",
        class: "5",
    },
    {
        id: 4,
        name: "Jake",
        class: "7",
    },
    {
        id: 5,
        name: "Amy",
        class: "9",
    },
    {
        id: 6,
        name: "Holt",
        class: "10",
    },
    {
        id: 7,
        name: "Charles",
        class: "3",
    }, {
        id: 8,
        name: "Scully",
        class: "4",
    }, {
        id: 9,
        name: "Terry",
        class: "8",
    },
]


function showEntry() {

    let userID = document.getElementById("id");
    let userName = document.getElementById("userName");
    let userClass = document.getElementById("userClass");

    let parent = document.getElementById("table");
    students.map((student) => {

        let tr = document.createElement('tr');
        let td1 = document.createElement("td");
        let td1Text = document.createTextNode(student.id)
        td1.appendChild(td1Text)

        let td2 = document.createElement("td");
        let td2Text = document.createTextNode(student.name)
        td2.appendChild(td2Text)

        let td3 = document.createElement("td");
        let td3Text = document.createTextNode(student.class)
        td3.appendChild(td3Text)

        let td4 = document.createElement("td");
        let btnDelete = document.createElement("button");
        btnDelete.setAttribute("id", "btnDelete");
        let btnText = document.createTextNode("Delete");
        btnDelete.appendChild(btnText);
        td4.appendChild(btnDelete);

        let btnEdit = document.createElement("button");
        btnDelete.setAttribute("id", "btnEdit");
        let btnText2 = document.createTextNode("Edit");
        btnEdit.appendChild(btnText2);
        td4.appendChild(btnEdit);

        btnDelete.addEventListener('click', function (e) {
            e.preventDefault();
            console.log("Delete Pressed")
            e.target.parentNode.parentNode.remove()
        })

        btnEdit.addEventListener('click', function (e) {
            e.preventDefault();
            console.log("Edit Pressed");
            userID.value = student.id;
            userName.value = student.name;
            userClass.value = student.class;
        })
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4)

        parent.appendChild(tr)

    })
}
function updateEntry() {
    window.location = "chapter 49-53.html"

    let userID = document.getElementById("id").value;
    let userName = document.getElementById("userName").value;
    let userClass = document.getElementById("userClass").value;

    students[userID].id = userID;
    students[userID].name = userName;
    students[userID].class = userClass;

    showEntry();
}
showEntry()



////Chapter 58-67

document.write("<br />")
document.write("<br />")
document.write("Chapter 58 to 67")

// Question No 1

// i
var mainContent = document.getElementById("main-content");
// ii
document.writeln(mainContent.innerHTML)
// iii
var elementRender = document.getElementsByClassName("render");
for (var i = 0; i < 5; i++) {
    document.writeln("<br/>" + elementRender[i].innerHTML);
}
// iv
var firstName = document.getElementById("first-name");
firstName.value = "syed Ali Jawwad"
// v
var lastName = document.getElementById("last-name");
lastName.value = "Zaidi"
var email = document.getElementById("email");
email.value = "s.alijawwad@gmail.com"


//1

// i
var formContent = document.getElementById("form-content");
document.writeln("<br/><br/><br/>Node Type of Form Content is: " + formContent.nodeType)
// ii
var lastName2 = document.getElementById("lastName");
document.writeln("<br />Node Type of Last Name is: " + lastName2.nodeType)
document.writeln("<br />Node Type of Last Name Child Node is: " + lastName2.firstChild.nodeType)
// iii
var lastNameUpdated = lastName2.firstChild.nodeValue = "Last Name:Raiden"
document.writeln("<br />Update value of Last Name Child Node is: " + lastNameUpdated)
// iv
document.writeln("<br />First Child of Main Content is: " + mainContent.childNodes[1].firstChild.nodeValue)
document.writeln("<br />Last Child of Main Content is: " + mainContent.childNodes[9].firstChild.nodeValue)
// v
document.writeln("<br />Next Sibling of LastName is : " + lastName2.nextSibling.nextSibling.childNodes[0].nodeValue)
document.writeln("<br />Previous Sibling of LastName is : " + lastName2.previousSibling.previousSibling.childNodes[0].nodeValue)
console.log(email.parentNode.innerHTML)
// vi
document.writeln("<br />Parent Node of Email is :" + email.parentNode.nodeName)
document.writeln("<br />Node Type of Email is :" + email.nodeType)