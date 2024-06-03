console.log(20+10);
console.log('Hello');

//Let's give this a go

let a, b, c;
a = 10;
b = 30;
c = a*b;

console.log(c)

let yourName, faveColor, nameAndColor;
yourName = prompt("Write your name and hit <enter>:");
faveColor = prompt("Write your favorite color and hit <enter>:");
nameAndColor = alert (`Hello ${yourName}, you like ${faveColor} yeah?`)

const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName");
const lastName = document.getElementById("lastName");
function fullNameText () {
    document.getElementById("fullNameText").innerHTML = `${firstName.value} ${middleName.value} ${lastName.value}`
};

const baseImage = document.getElementById("baseImage");
function changeImage(imgsrc){
    baseImage.src = imgsrc;
};