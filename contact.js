const form = document.getElementById("contactForm");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const message =
        document.getElementById("message").value.trim();


    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";


    let valid = true;


    if (name === "") {

        document.getElementById("nameError").textContent =
            "Please enter your name.";

        valid = false;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        document.getElementById("emailError").textContent =
            "Please enter your email.";

        valid = false;

    } else if (!emailPattern.test(email)) {

        document.getElementById("emailError").textContent =
            "Enter a valid email address.";

        valid = false;
    }


    const phonePattern = /^[0-9]{10}$/;


    if (phone === "") {

        document.getElementById("phoneError").textContent =
            "Please enter your phone number.";

        valid = false;

    } else if (!phonePattern.test(phone)) {

        document.getElementById("phoneError").textContent =
            "Enter a valid 10 digit phone number.";

        valid = false;
    }


    if (message === "") {

        document.getElementById("messageError").textContent =
            "Please enter your message.";

        valid = false;
    }


    if (valid) {

        alert(
            "Thank you for contacting 22 Yards Club!"
        );

        form.reset();

    }

});