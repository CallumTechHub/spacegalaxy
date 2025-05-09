// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Form elements
    const flightForm = document.getElementById("flightForm");
    const passengerForm = document.getElementById("passengerForm");
    const passengerFormSection = document.getElementById("passengerFormSection");
    const bookingSummary = document.getElementById("bookingSummary");
    const flightDetailsParagraph = document.getElementById("flightDetails");
    const passengerDetailsParagraph = document.getElementById("passengerDetails");
    const confirmButton = document.getElementById("confirmButton");
    const confirmationMessage = document.getElementById("confirmationMessage");

    // Flight form submission
    flightForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get flight data
        const departure = document.getElementById("departure").value;
        const destination = document.getElementById("destination").value;
        const date = document.getElementById("date").value;

        // Show passenger form section
        passengerFormSection.style.display = "block";
        bookingSummary.style.display = "none";
        confirmationMessage.style.display = "none";

        // Store flight details globally
        window.flightDetails = { departure, destination, date };
    });

    // Passenger form submission
    passengerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get passenger data
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const contact = document.getElementById("contact").value;

        // Store passenger details globally
        window.passengerDetails = { name, age, contact };

        // Show booking summary
        flightDetailsParagraph.innerText = `Flight: ${window.flightDetails.departure} to ${window.flightDetails.destination}\nDate: ${window.flightDetails.date}`;
        passengerDetailsParagraph.innerText = `Passenger: ${window.passengerDetails.name}\nAge: ${window.passengerDetails.age}\nContact: ${window.passengerDetails.contact}`;
        bookingSummary.style.display = "block";
        passengerFormSection.style.display = "none";
    });

    // Confirm booking
    confirmButton.addEventListener("click", function () {
        bookingSummary.style.display = "none";
        confirmationMessage.style.display = "block";






        
        // Optional: Interact with the audio element
    const audio = document.getElementById('googleDriveAudio');
    // audio.play(); // Uncomment if you want it to autoplay (not recommended on mobile)
    });
});
