import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import '/src/App.css'

function Matching() {
    const navigate = useNavigate();

    return (
        <>
            <Link to="/"></Link>
            <h1> MATCHITY </h1>
            <h2>Here are your options: </h2>

            <dialog id="charities">
                <button type="button" id="yesButtonLink"> Yes </button>
                <button type="button" id="noButtonLink"> No </button>
            </dialog>
            <button type="button" id="finalizeLink" onClick={ () => { navigate('/results')} }> Finalize matching </button>
        </>
    )
}

export default Matching
