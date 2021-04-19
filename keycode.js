window.addEventListener("keydown", () => {
    document.getElementById("header").innerHTML = event.key;
    document.getElementById("eventKey").innerHTML = event.key;
    document.getElementById("eventCode").innerHTML = event.keyCode;
    document.getElementById("eventWhich").innerHTML = event.code;
})
