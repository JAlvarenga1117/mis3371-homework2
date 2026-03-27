function reviewForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    document.getElementById("reviewArea").innerHTML =
        "<h3>PLEASE REVIEW THIS INFORMATION</h3>" +
        "<p>Name: " + firstName + " " + lastName + "</p>";
}

function updateSlider() {
    document.getElementById("sliderValue").innerText =
        document.getElementById("healthScale").value;
}
