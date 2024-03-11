document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    alert("User signed up successfully!");
    window.location.href = "login.html";
});
