function nested() {
    function restaurantPicker() {
        let restPicker = Math.floor(Math.random() * restaurants.length);
        return restaurants[restPicker];
    }
    let restResults = restaurantPicker();
    console.log(restResults);
}
nested();









