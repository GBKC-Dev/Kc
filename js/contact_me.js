document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var formData = new FormData(contactForm);
        var url = "https://docs.google.com/forms/d/e/1FAIpQLSfhggVYmB6zX9-G-9I09UdbF9URmOTS8mH6avyOp4oSjnUVgQ/formResponse";

        fetch(url, {
            method: "POST",
            body: formData,
            mode: "no-cors" // To prevent CORS issues
        })
        .then(function(response) {
            // Handle the response here
            var messageContainer = document.getElementById("message");
            messageContainer.innerHTML = "<div class='alert alert-success'>Thank you for connecting with us!</div>";
            contactForm.reset();
        })
        .catch(function(error) {
            // Handle errors here
            var messageContainer = document.getElementById("message");
            messageContainer.innerHTML = "<div class='alert alert-danger'>Oops! Something went wrong. Please try again later.</div>";
        });
    });
});