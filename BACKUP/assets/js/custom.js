function sendMessage(name, email, subject, message) {
    name = String(name).trim();
    email = String(email).trim();
    subject = String(subject).trim();
    message = String(message).trim();
    if(name == "" || email == "" || subject == "" || message == "" || !String(email).includes("@") || !String(email).includes(".")) {
        alert("Please ensure all fields are complete and/or email is valid");
    } else {
        document.getElementById("submit").disabled = true;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "email": String(email),
            "sender": String(name),
            "subject": String(subject),
            "message": String(message)
        });
        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        fetch("https://7g9n4wu4gg.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
            .then(res => res.json())
            .then(function res() {
                document.getElementById('name').value = ""; 
                document.getElementById('email').value = ""; 
                document.getElementById('subject').value = "";
                document.getElementById('message').value = "";
                alert("Thank you for sending your message, " + name + "!");
                document.getElementById("submit").disabled = false;
            })
            .catch(e => console.log(e));
    }
}

function getVisitorCount(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({});
        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
    fetch("https://fiokcjyrp1.execute-api.us-east-1.amazonaws.com/dev", requestOptions).then((result) => {
        result.json().then((resp) => {
            var visitors = document.getElementById('visitors');
            visitors.innerHTML = "Visitor Count: " + String(resp);
        })
    })
}
