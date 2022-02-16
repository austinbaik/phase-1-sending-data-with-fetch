// Add your code here
// write a function, submitData, that takes two strings as arguments, one representing a user's name
// and the other representing a user's email.



// The destination URL
// Headers for 'Content-Type' and 'Accept', both set to 'application/json'
// A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object. This object should then be stringified.



function submitData(userName, userEmail) {
    console.log(userName)
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            document.body.append(object.id)
        })
        .catch(function (message) {
            document.body.append(message)
        });
}

