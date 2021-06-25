"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my website");

var color;
color = prompt("What is your favorite color");
var message;
message = "Great, " + color + " is my favorite color too!"
alert(message);

var price;
price = confirm("What is the price for the movie rentals?");
var message;
message = "The price for the movie rentals is: " + (3+5+1)* 3
alert(message);

var payment;
payment = confirm("How much are you getting paid?");
var message;
message = "I am getting paid: " + ((400 * 10) + (380 * 6) + (350 * 4))
alert(message);

var full = prompt("Is the class full?");
var conflict = prompt("Is there a conflict?");
var message;
message = confirm("No,you can now enroll in class")
alert(message);

var premium = prompt("Are you a premium member?");
var quantity = Number(prompt("How many items did you buy"));
var expired = confirm("Is the coupon expired");
alert("You can get the discount");