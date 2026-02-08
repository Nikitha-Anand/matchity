//while "finalize" button is not clicked, run the script
//if click either YES or NO button, switch charity candidate

let searching = true;
//let used to declare a var. when it can be reassigned
let yes_button = false;
//const declares a var. with a constant value
let no_button = false;
let finalize_button = false;

const charity_list = await fetch(GET | "http://localhost:8080/api/matchity/match/full");


//checking if buttons have been pressed:
document.getElementById('finalizeLink').onclick = function(event) {
    //PREVENT PAGE FROM REFRESHING/following the link
    event.preventDefault();
    finalize_button = true;
}

document.getElementById('yesButtonLink').onclick = function(event) {
    event.preventDefault();
    yes_button = true;
}

document.getElementById('noButtonLink').onclick = function(event) {
    event.preventDefault();
    no_button = true;
}

let charity_object = document.getElementById("charities");
let charity_info_paragraph = document.createElement("p");


while (searching) {
    for (const charity of charity_list) {

        //display charity info in an embedded window id="charities"
        for (const key in charity) {
            //let charity_info = document.createTextNode( ObjectName.title)
            if (Object.hasOwnProperty.call(charity, key)) {
                console.log(`${key}: ${charity[key]}`);
            }
        }

        if (yes_button) {
            //add true to the charity and go to next
            yes_button = false;
        }
        else if (no_button) {
            //add false to the charity and go to next
            no_button = false;
        }
        else if (finalize_button) {
            //save the charities that clicked yes to, send those over to the AI
            //go to results page
            window.location.href = "Matchity_results.html";
            searching = false;

    }
    }
}