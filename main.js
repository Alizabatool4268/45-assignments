//45 ASSIGNMENTS
// INSTALLATION COMPLETED
// ASSIGNMENT NO 2
let message = "Aliza";
console.log(`Hello ${message}! would you like to learn typescript today?`);
// ASSIGNMENT NO 3
let aMessage = "Aliza";
console.log(aMessage.toLowerCase());
let personName = "fatima";
console.log(personName.toUpperCase());
// the charAt is used to get value of a specified character at specified index
let userName = "batool";
console.log(userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase());
// // ASSIGNMENT NO 4
let author = "Quaid-e-azam";
let quote = "Think a hundred times before you take a decision, but once that decisoion is taken, stand by it as one man. ";
console.log(`${author} once said: \n\t "${quote}"`);
//ASSIGNMENT NO 5
let famousPerson = "Allama Iqbal";
let Amessage = "Nations are born in the hearts of poets ,they prosper and die in the hand of politicians";
console.log(`${famousPerson} once said: \n\t "${Amessage}"`);
// //ASSIGNMENT NO 6
let myName = "\n\t Aliza batool \n\t";
console.log(myName);
let stripped = myName.trim();
console.log(stripped);
// // ASSIGNMENT NO 7
let numOne = 4;
let numTwo = 4;
console.log(numOne + numTwo);
let numThree = 10;
let numFour = 2;
console.log(numThree - numFour);
let numFive = 4;
let numSix = 2;
console.log(numFive * numSix);
let numSeven = 64;
let numEight = 8;
console.log(numSeven / numEight);
// //ASSIGNMENT NO 8
console.log(5 + 3);
console.log(4 + 4);
console.log(6 + 2);
console.log(7 + 1);
// //ASSIGNMENT NO 9
let favoriteNumber = 2;
console.log(`my favorite number is ${favoriteNumber}`);
//ASSIGNMENT NO 10
// name = Aliza , date = 5-5-2024
// programs function:
// This program stores a famous persons name in a variable(named author) , and the famous quote of that
// person is stored in the other variable (named quote), which is then printed,console.log command is
// used for printing the coad and I have also used template literals and whitespaces (\n\t).
let authorA = "Quaid-e-azam";
let quoteA = "Think a hundred times before you take a decision, but once that decisoion is taken, stand by it as one man. ";
console.log(`${authorA} once said: \n\t "${quoteA}"`);
// // Name = Aliza , date = 5-5-2024
// // programs function:
// // In this program I have used whitespaces \n\t. \n is used for changing line and \t is used for leaving
// // four space gap. In first coad I have added whitspaces and printed it and in the second one I have
// // strriped the added whitespaces.
let myNameA = "\n\t Aliza batool \n\t";
console.log(myNameA);
let strippedA = myName.trim();
console.log(strippedA);
// //ASSIGNMENT NO 11
let names = ["laiba", "kainat", "emaan"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
// //ASSIGNMENT NO 12
let namesA = ["laiba", "kainat", "emaan"];
console.log(`"hello ${namesA[0]} how are you doing today"`);
console.log(`"hello ${namesA[1]} how are you doing today"`);
console.log(`"hello ${namesA[2]} how are you doing today"`);
//ASSIGNMENT NO 13
// indexing method
const transport = ["Honda motorcycle", "Rollsroyce car", "Yatch"];
console.log(`I would like to own a ${transport[0]} one day`);
console.log(`I would like to own a ${transport[1]}  one day`);
console.log(`I would like to own a ${transport[2]}  one day`);
//ASSIGNMENT NO 14
const guests = ["laiba", "kainat", "emaan"];
console.log(`"Asalam alikum ${guests[0]} hope your free tonight.Iam hosting a dinner tonight and you are invited"`);
console.log(`"Asalam alikum ${guests[1]} hope your free tonight.Iam hosting a dinner tonight and you are invited"`);
console.log(`"Asalam alikum ${guests[2]} hope your free tonight.Iam hosting a dinner tonight and you are invited"`);
// // //ASSIGNMENT NO 15
console.log(`ohh!! ${guests[2]} cant make it . she is sick`);
guests.pop();
guests.push("fatima");
console.log(guests);
console.log(`"Asalam alikum ${guests[0]} hope your free tonight.Iam hosting a dinner tonight and you are invited"`);
console.log(`"Asalam alikum ${guests[1]}  hope your free tonight.Iam hosting a dinner tonight and you are invited "`);
console.log(`"Asalam alikum ${guests[2]}  hope your free tonight.Iam hosting a dinner tonight and you are invited "`);
// //ASSIGNMENT NO 16
console.log("hey guys! I found a bigger table theirfore, I am extending the guest list by the slighest so there are gonna be more guests");
guests.unshift("ali");
guests.splice(1, 0, "Imran");
guests.push("faheem");
console.log(guests);
guests.forEach((guests) => {
    console.log(`Assalam alikum! Dear ${guests} you are invited for dinner tonight. At my place.`);
});
// //ASSIGNMENT NO 17
console.log("sad news! the bigger tables would not be able to arrive in time. thats why I can only invite two guests");
guests.pop();
console.log(guests);
console.log("sorry I cant invite you faheem");
guests.pop();
console.log(guests);
console.log("sorry I cant invite you fatima");
guests.pop();
console.log(guests);
console.log("sorry I cant invite you kainat");
guests.pop();
console.log(guests);
console.log("sorry I cant invite you laiba");
console.log("Ali and imran you both are still invited");
guests.pop();
guests.pop();
console.log(guests);
// //ASSIGNMENT NO 18
let places = ["Iran", "Paris", "korea", "America", "Dubai"];
console.log("original order", places);
//alphabetical order temporary
console.log("alphabetical order", [...places].sort()); // ... spread operator: clones the array so the changes are done in the clone not in the original array.
// unchanged order
console.log("unchanged order", places);
// reverse alphbetical order temporary
console.log("reverse alphabetical order", [...places].sort().reverse()); // spread operator
//unchanged order
console.log("unchanged order", places);
// reverse order permanent
console.log("reverse order permanent", places.reverse());
//reverse order permanently again
console.log("reverse order again", places.reverse());
//alphabetical order permanent
console.log("alphabetical order permanent", places.sort());
console.log("original order is changed to aplphabetical order", places);
//reverse permanent  alphabetical order
console.log("reverse permanent  alphabetical order", places.reverse());
//ASSIGNMENT NO 19
let guest = ["laiba", "kainat", "fatima"];
let guestNumber = guest.length;
console.log(` the number of guests I called was ${guestNumber}`);
//ASSIGNMENT NO 20
let list = [
    "mount everest",
    "america",
    "canada",
    "Iran",
    "paris"
];
console.log(list);
// //ASSIGNMENT NO 21
const fruits = {
    name: "mango",
    price: "200"
};
console.log(fruits);
const locations = {
    mountain: "mount everest",
    country: ["America", "canada", "paris", "Iran"]
};
console.log(locations);
// objects are created
// //ASSIGNMENT NO 22
//0         //1          //2
let makeup = ["lipstick", "eyeshadow", "eyeliner"];
//console.log(makeup[3]);
// error will appear here due to mistake in indexing . It will give undefined in the output.
//as there is no value in the index 3
// the error will correct if we write 2 as it is defined.
console.log(makeup[2]);
//ASSIGNMENT NO 23
//first statement
let aliza = "developer";
console.log("Is aliza == 'developer'? I predict true.");
console.log(aliza == "developer");
//second satatement
let currentMonth = "june";
console.log("is month == 'july'? I pridict false.");
console.log(currentMonth == "july");
//third statement
let event = "today";
console.log("is event == today ? I predict true.");
console.log(event == "today");
//fourth statement
let visitors = 5;
console.log("are visitors = 5 ? I perdict true.");
console.log(visitors == 5);
// //fifth statement
let game = "candy crush";
console.log("Is game == pubg?I predict false");
console.log(game == "pubg");
//sixth statement
let job = "content writer";
console.log("Is the job == doctor?I predict false");
console.log(job == "doctor");
// seventh ststement
let number = 2;
console.log(" Is the number == 6 ? I perdict false");
console.log(number == 6);
// eight statement
let fatima = "manager";
console.log("Is Fatima == 'manager'? I predict true.");
console.log(fatima == "manager");
//ninth statement
let room = "bed room";
console.log("Is room == 'bed room'? I predict true.");
console.log(room == "bed room");
//tenth statement
let utensil = "spoon";
console.log("is utensil== fork? I predict false");
console.log(utensil == "fork");
//ASSIGNMENT NO 24
//test for equality or inequility of strings
let str1 = "aliza";
let str2 = "aliza";
console.log(str1.valueOf() == str2.valueOf()); // true
let str3 = "fatima";
let str4 = "aliza";
console.log(str3 == str4); //false
// //tests using the lower case function
let str5 = "GIAIC";
let str6 = "giaic";
console.log(str5.toLowerCase() == str6); //true
let str7 = ("fatima");
let str8 = ("FATIMA");
console.log(str7 != str8.toLowerCase()); //false
// // Numerical tests involving equality and inequality, greater than and less than,
// //greater than or equal to, and less than or equal to
//equality
let num1 = 2;
let num2 = 2;
console.log(num1 != num2); // false
let number1 = 2;
let number2 = 2;
console.log(number1 == number2); // true
// inequality
let num3 = 1;
let num4 = 3;
console.log(num3 != num4); // true
let number3 = 2;
let number4 = 2;
console.log(number3 != number4); // false
//greater than
let num5 = 5;
let num6 = 3;
console.log(num5 > num6); //true
let number5 = 3;
let number6 = 4;
console.log(number5 > number6); //false
//less than
let num7 = 8;
let num8 = 6;
console.log(num7 < num8); //false
let number7 = 3;
let number8 = 5;
console.log(number7 < number8); //true
//greater than or equal to
let num9 = 33;
let num10 = 43;
console.log(num10 >= num9); //true
let number9 = 54;
let number10 = 43;
console.log(number10 >= number9); //false
//less than or equal to
let num11 = 23;
let num12 = 34;
console.log(num11 <= num12); //true
let number11 = 53;
let number12 = 34;
console.log(number11 <= number12); //true
//Tests using "and" and "or" operators
// and operrator
let operator1 = 4 < 5;
let operator2 = 3 < 5;
console.log(operator1 && operator2); //true
let operator3 = 4 > 5;
let operator4 = 4 > 6;
console.log(operator3 && operator4); //false
//or operator
let operator5 = 3 < 7;
let operator6 = 6 < 7;
console.log(operator5 || operator6); //true
let operator7 = 4 > 5;
let operator8 = 4 > 5;
console.log(operator7 || operator8); //false
// test weather the item is in the array
let stationary = ["pencil", "eraser", "ruler"];
console.log(stationary.includes("pencil")); //true
console.log(stationary.includes("pen")); //false
// test weather the item is in the array
let stationary2 = ["pencil", "eraser", "ruler", "pen", "marker"];
console.log(!stationary2.includes("pencil")); //false
console.log(!stationary2.includes("tape")); //true
//ASSIGNMENT NO 25
let alienColour = "green";
if (alienColour === "green") {
    console.log("congrats! You have earned 5 points");
}
else {
    console.log("you won nothing");
}
; // runs if block
let alienColour2 = "red";
if (alienColour2 === "green") {
    console.log("congrats! You have earned 5 points");
}
else {
    console.log("you won nothing");
}
; // runs else block
//ASSIGNMENT NO 26
let alienColor1 = "green";
if (alienColor1 === "green") {
    console.log("you just earned 5 points for shooting the alien");
}
else if (alienColor1 === "red") {
    console.log("you just earned 10 points for shooting the alien");
}
else {
    console.log("you won no points");
}
; // runs if block
let alienColor2 = "red";
if (alienColor2 === "green") {
    console.log("you just earned 5 points for shooting the alien");
}
else if (alienColor2 === "red") {
    console.log("you just earned 10 points for shooting the alien");
}
else {
    console.log("you won no points");
}
; // runs else if block
let alienColor3 = "yellow";
if (alienColor3 === "green") {
    console.log("you just earned 5 points for shooting the alien");
}
else if (alienColor3 === "red") {
    console.log("you just earned 10 points for shooting the alien");
}
else {
    console.log("you won no points");
}
; // runs else block
//ASSIGNMENT NO 27
let alien_color = "green";
if (alien_color === "green") {
    console.log("you just earned 5 points for shooting the alien");
}
else if (alien_color === "yellow") {
    console.log("you just earned 10 points for shooting the alien");
}
else if (alien_color === "red") {
    console.log("you earned 15 points for shooting the alien");
}
else {
    console.log("you won no points");
} // runs if block
let alien_color2 = "yellow";
if (alien_color2 === "green") {
    console.log("you just earned 5 points for shooting the alien");
}
else if (alien_color2 === "yellow") {
    console.log("you just earned 10 points for shooting the alien");
}
else if (alien_color2 === "red") {
    console.log("you earned 15 points for shooting the alien");
}
else {
    console.log("you won no points");
} // runs else if block
let alien_color3 = "red";
if (alien_color3 === "green") {
    console.log("you just earned 5 points for shooting the alien");
}
else if (alien_color3 === "yellow") {
    console.log("you just earned 10 points for shooting the alien");
}
else if (alien_color3 === "red") {
    console.log("you earned 15 points for shooting the alien");
}
else {
    console.log("you won no points");
} // runs else if block
let alien_color4 = "purple";
if (alien_color4 === "green") {
    console.log("you just earned 5 points for shooting the alien");
}
else if (alien_color4 === "yellow") {
    console.log("you just earned 10 points for shooting the alien");
}
else if (alien_color4 === "red") {
    console.log("you earned 15 points for shooting the alien");
}
else {
    console.log("you won no points");
} // runs else block
//ASSIGNMENT NO 28
let age = 65;
if (age < 2) {
    console.log("person is a baby");
}
else if (age <= 4) {
    console.log("person is a toddler");
}
else if (age < 13) {
    console.log("person is a kid");
}
else if (age <= 19) {
    console.log("person is a teenager");
}
else if (age <= 65) {
    console.log("person is an adult");
}
else if (age > 65) {
    console.log("person is an elder");
}
else {
    console.log("kindly enter a valid age");
}
;
//ASSIGNMENT NO 29
let favoriteFruit = ["apple", "banana", "mango"];
if (favoriteFruit.includes("apple")) {
    console.log(`you really like ${favoriteFruit[0]}`);
}
if (favoriteFruit.includes("banana")) {
    console.log(`you really like ${favoriteFruit[1]}`);
}
if (favoriteFruit.includes("mango")) {
    console.log(`you really like ${favoriteFruit[2]}`);
}
if (favoriteFruit.includes("cherry")) {
    console.log(`you really like ${favoriteFruit[3]}`);
}
if (favoriteFruit.includes("pineapple")) {
    console.log(`you really like ${favoriteFruit[4]}`);
}
//ASSIGNMENT NO 30
let userNames = ["aliza", "fatima", "hamza", "alina", "admin"];
for (let x of userNames) {
    if (x.toLowerCase() === "admin") {
        console.log(`hello${x}, would you like to see a status report?`);
    }
    else {
        console.log(`hello ${x} thankyou for logging in again`);
    }
}
;
// //ASSIGNMENT NO 31
console.log(userNames);
userNames.pop();
userNames.pop();
userNames.pop();
userNames.pop();
userNames.pop();
console.log(userNames);
if (userNames.length === 0) {
    console.log("we need more users !!");
}
;
//ASSIGNMENT NO 32
let currentUser = ["fatima", "ashrab", "qasim", "ali", "nomaan"];
let newUser = ["alina", "usra", "ashrab", "qasim", "ali"];
for (let i = 0; i < currentUser.length; i++) {
    currentUser[i] = currentUser[i].toLowerCase();
}
for (let a = 0; a < newUser.length; a++) {
    newUser[a] = newUser[a].toLowerCase();
}
newUser.forEach((newUser) => {
    if (currentUser.includes(newUser)) {
        console.log(`${newUser} userNmae is not available`);
    }
    else {
        console.log(`${newUser} userName is available`);
    }
});
//ASSIGNMENT NO 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let v of numbers) {
    if (v === 1) {
        console.log(`${numbers[0]}st`);
    }
    else if (v === 2) {
        console.log(`${numbers[1]}nd`);
    }
    else if (v === 3) {
        console.log(`${numbers[2]}rd`);
    }
    else {
        console.log(`${v}th`);
    }
}
// //ASSIGNMENT NO 34
let pizza = ["chiken tikka", "margherita", "fajita"];
for (let i = 0; i < pizza.length; i++) {
    console.log(`I like ${pizza[i]} pizza`);
}
;
console.log("chiken tikka, margherita ,fajita pizza is really delicious.I can eat it all day.I really love pizza");
//ASSIGNMENT NO 35
let animals = ["dog", "cat", "parrot"];
for (let n = 0; n < animals.length; n++) {
    console.log(`${animals[n]} will make a great pet animal`);
}
console.log("these animals would make a great pet!");
//  ASSIGNMENT NO 36
function makeShirt(size, message) {
    return console.log(`size of the shirt is ${size} message on the shirt is ${message}`);
}
makeShirt("small", "Always smile");
//ASSIGNMENT NO 37
function make_Shirt(size = "large", message = "I love typescript") {
    console.log(`The shirt size is ${size} and the message on the shirt is ${message}`);
}
;
make_Shirt();
make_Shirt("medium", "work hard and practice");
make_Shirt("Xl", "I love coading");
// //ASSIGNMENT NO 38
function describe_city(City, country = "pakistan") {
    return console.log(`${City} is a city of ${country}`);
}
;
describe_city("karachi");
describe_city("peshawar");
describe_city("Makkah", "saudia Arab");
//ASSIGNMENT NO 39
function city_country(cityCountryPair) {
    return console.log(cityCountryPair);
}
city_country("lahore,pakistan");
city_country("Makkah,saudia arab");
city_country("hyderabad,pakistan");
//ASSIGNMENT NO 40
function make_albums(Artistname, album, track) {
    let albums = {
        Artistname: Artistname,
        album: album,
    };
    if (track !== undefined) {
        albums.track = track;
    }
    return console.log(albums);
}
make_albums("taylor swift", "Midnights");
make_albums("selena gomez", "rare", 12);
make_albums("taylor swift", "everMore");
//ASSIGNMENT NO 41
let magicians = ["Ali", "Mustufa", "Fajar"];
function show_magicians(magicians) {
    magicians = magicians;
    console.log(magicians);
}
console.log("original Array");
show_magicians(magicians);
// //ASSIGNMENT NO 42
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} The great`;
    }
    return console.log(magicians);
}
console.log("modified array");
make_great(magicians);
// //ASSIGNMENT NO 43
let magician = ["Ali", "Mustufa", "Fajar"];
function showMagician(magician) {
    magician = magician;
    console.log(magician);
}
function makeGreat(magician) {
    let greatMagicians = [];
    magician.forEach((magician) => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}
console.log("original array assignment 43");
showMagician(magician); // shows original names
console.log("great Magicians Array assignment no 43");
let greatMagicians = makeGreat(magician.slice()); // creates a new modified array
console.log(greatMagicians);
makeGreat(greatMagicians);
//ASSIGNMENT NO 44
function sandwishes(item) {
    console.log(` making a sadwich with ${item.join(", ")}.`);
}
sandwishes(["cheese", "salt"]);
sandwishes(["chiken patte", "onion", "ketchup"]);
sandwishes(["beef patte", "onion", "tomato"]);
function makingCars(manufacturer, model, ...option) {
    let car = { manufacturer, model };
    option.forEach(([key, value]) => { car[key] = value; });
    return car;
}
console.log(makingCars("toyota", "corolla", ["color", "Black"]));
console.log(makingCars("toyota", "corolla", ["color", "Black"], ["year", "2007"]));
console.log(makingCars("toyota", "corolla", ["color", "Black"]));
export {};
// --------------------------ALL 45 ASSIGNMENTS HAVE BEEN COMPLETED------------------------
