const btn = document.getElementById("return-button");

if (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        console.log("Historial:", history.length);
        console.log("Referrer:", document.referrer);

        if (document.referrer) {
            window.location.href = document.referrer;
        } else if (history.length > 1) {
            history.back();
        } else {
            window.location.href = "index.html";
        }
    });
}