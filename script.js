
// Booking State
const bookingState = {
    service: null,
    servicePrice: 0,
    expert: null,
    date: null,
    time: null
};

// Expert Availability (time slots they work: true = available)
const expertAvailability = {
    'Mark Dubois': ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM'], // Not available 2PM-4PM
    'Luiz Gonzalez': ['09:00 AM', '10:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'], // Not available 11AM-1PM
    'Gavin Dubois': ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'], // Not available 9AM
    'Daniel Barnes': ['09:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'] // Not available 10AM, 1PM
};


function myBurgerMenu() {
    var links = document.getElementById("burger_links");
    links.classList.toggle("show");
}
