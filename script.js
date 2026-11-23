// Display a message when the registration form is submitted.
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("formMessage").textContent =
        "Registration form submitted successfully!";
    this.reset();
});
