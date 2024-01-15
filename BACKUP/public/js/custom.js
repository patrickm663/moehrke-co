function sendMessage(name, email, subject, message) {
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
        redirect: "follow",
    };
    fetch("https://7g9n4wu4gg.execute-api.us-east-1.amazonaws.com/dev", requestOptions).then(response => response.text());
}
