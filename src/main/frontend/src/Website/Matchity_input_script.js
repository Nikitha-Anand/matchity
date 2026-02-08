// CONTENT HAS ALREADY BEEN MIGRATED TO REACT


//save the input info into a JSON file to be read 
// by the "matching" code

let form = document.querySelector("form");  
form.addEventListener("submit", handleSubmit);

//setting up a json server:
//npm install -g json-server
//json-server --watch src/Website/db.json
//server starts --> local URL 
// --> endpoint is http://localhost:300/submissions

function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    let jsonData = JSON.stringify(data);
    fetch("http://localhost:300/submissions", {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: jsonData
    }).then(res => res.json())
    .then(result => console.log(result))
    .catch(err => console.log(err))

    window.location.href = "Matchity_matching.html";   
}