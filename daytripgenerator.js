"use strict";
// console.log("File Connected")

let destinations = ['Florida', 'Washington', 'Texas', 'Kentucky', 'Alaska'];

function destinationPicker() {
    let destIndex = Math.floor(Math.random() * destinations.length);
    return destinations[destIndex];
}
let result = destinationPicker();
console.log(result);


let restaurants = ['McDonalds', 'Burger King', 'Subway', 'Raising Canes Chicken', 'Andolinis Pizza'];

function restaurantPicker() {

}


let transportation = ['Self Drive', 'Uber', 'Book Flight', 'StarShip'];

function transportationPicker() {

}


let entertainment = ['Movie Tickets', 'Live Band', 'Sporting Event', 'Murder Mystery Dinner'];

function entertainmentPicker() {

}