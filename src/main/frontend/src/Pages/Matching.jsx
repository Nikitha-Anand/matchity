import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Charity from "../Components/Charity"
import '/src/App.css'

function Matching() {
    const navigate = useNavigate();
    localStorage.setItem("current-charity", 0);

    return (
        <>
            <Link to="/"></Link>
            <h1 class="title">MATCHITY</h1>
            <h2 class="subtitle">Here are your best matches</h2>

            <dialog id="charities" class="card">
                <div class="card-content">
                    <h3 id="name"></h3>
                    <p id="description"></p>
                    <span id="urgency" class="urgency-badge"></span>
                </div>

                <div class="actions">
                    <button id="noButtonLink" class="btn no">No</button>
                    <button id="yesButtonLink" class="btn yes">Yes</button>
                </div>

                <button id="finalizeLink" class="finalize">
                    Finalize matching
                </button>
            </dialog>
            <button type="button" id="finalizeLink" onClick={ () => { navigate('/results')} }> Finalize matching </button>
        </>
    )
}

export default Matching
