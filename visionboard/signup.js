document.addEventListener("DOMContentLoaded", function() {
    const signUpButton = document.getElementById('sign-up-btn');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');

    signUpButton.addEventListener('click', function() {
        const email = emailInput.value;
        const password = passwordInput.value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("User signed up successfully:", userCredential.user);
                // You can add further actions after successful sign-up, like redirecting to another page
            })
            .catch((error) => {
                console.error("Error signing up user:", error.message);
                // Handle errors here, like displaying error messages to the user
                alert("Error signing up: " + error.message);
            });
    });
});
