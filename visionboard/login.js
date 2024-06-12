document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById('login-btn');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');

    loginButton.addEventListener('click', function() {
        const email = emailInput.value;
        const password = passwordInput.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("User logged in successfully:", userCredential.user);
                // You can add further actions after successful login, like redirecting to another page
            })
            .catch((error) => {
                console.error("Error logging in:", error.message);
                // Handle errors here, like displaying error messages to the user
                alert("Error logging in: " + error.message);
            });
    });
});
