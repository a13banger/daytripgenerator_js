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
    let restPicker = Math.floor(Math.random() * restaurants.length);
    return restaurants[restPicker];
}
let restResults = restaurantPicker();
console.log(restResults);


let transportation = ['Self Drive', 'Uber', 'Book Flight', 'StarShip'];
function transportationPicker() {
    let transIndex = Math.floor(Math.random() * transportation.length);
    return transportation[transIndex];
}
let transResults = transportationPicker();
console.log(transResults);

let entertainment = ['Movie Tickets', 'Live Band', 'Sporting Event', 'Murder Mystery Dinner'];
function entertainmentPicker() {
    let enterIndex = Math.floor(Math.random() * entertainment.length);
    return entertainment[enterIndex];
}
let enterResults = entertainmentPicker();
console.log(enterResults);

// Initial test of connecting the randomizer to the HTML button
document.getElementById("trip_button").addEventListener("click", tripClick);
function tripClick() {
    document.getElementById("trip_result").innerHTML = result;

}