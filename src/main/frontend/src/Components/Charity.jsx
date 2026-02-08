// Charity object representation
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import data from './db.json' with { type: 'json' };

let charity = {
    "name": data["name"],
    "description": data["descript"],
    "budget": data["budget"],
    "match": false
}

function updatePreferences(boolean) {
    charity.match = boolean;
    // update the json file
    // change the charity
}

function Charity() {

    return (
        <>
            <div className="charity-object">
                <h1> { charity.name } </h1>
                <p> { charity.description } </p>
                <div className="charity-choice-buttons">
                    <button type="button" id="yesButtonLink" onClick={ () => { updatePreferences(true) } }> Yes </button>
                    <button type="button" id="noButtonLink"  onClick={ () => { updatePreferences(false) } } > No </button>
                </div>
            </div>
        </>
    )
}

export default Charity;