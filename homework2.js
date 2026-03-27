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
    function checkPasswords() {
    const pw1 = document.getElementById("password").value;
    const pw2 = document.getElementById("password2").value;

    if (pw1 !== pw2) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}
}
