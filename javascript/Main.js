const EmailButton = document.getElementById("EmailButton");
const EmailURL = "mailto:info@bmstc.org";

function OpenMailApp() {
    window.location.href = EmailURL;
}

if (EmailButton) {
    EmailButton.addEventListener("click", OpenMailApp);
}

