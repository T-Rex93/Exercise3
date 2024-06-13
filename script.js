document.querySelector('.search-bar button').addEventListener('click', function() {
    var location = document.querySelector('.search-bar input[type="text"]').value;
    var checkin = document.querySelector('.search-bar input[type="date"]:nth-child(2)').value;
    var checkout = document.querySelector('.search-bar input[type="date"]:nth-child(3)').value;
    var guests = document.querySelector('.search-bar input[type="number"]').value;

    if (!location || !checkin || !checkout || !guests) {
        alert('Please fill in all fields.');
    } else {
        // Process the search query
        console.log('Searching for', location, checkin, checkout, guests);
    }
});
