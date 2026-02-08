// Charity object representation
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import data from './db.json' with { type: 'json' };

let charitiesArray = data;
let formattedCharitiesArray = [];
let current = localStorage.getItem("current-charity");

let i;
for (i = 0; i < data.length; i++) {
    formattedCharitiesArray[i] = {
        "name": data[i]["name"],
        "descript": data[i]["descript"],
        "budget": data["budget"],
        "match": false,
        "current": false
    }
}

function updatePreferences(boolean) {
    formattedCharitiesArray[0].match = boolean;
    // localStorage.setItem("current-charity", current++);
    // currentCharity++;
    // update the json file
    // change the charity
}

function Charity() {

    return (
        <>
            <div className="charity-object">
                <h1> { formattedCharitiesArray[0].name } </h1>
                <p> { formattedCharitiesArray[0].name } </p>
                <div className="charity-choice-buttons">
                    <button type="button" id="yesButtonLink" onClick={ () => { updatePreferences(true) } }> Yes </button>
                    <button type="button" id="noButtonLink"  onClick={ () => { updatePreferences(false) } } > No </button>
                </div>
            </div>
        </>
    )
}

export default Charity;