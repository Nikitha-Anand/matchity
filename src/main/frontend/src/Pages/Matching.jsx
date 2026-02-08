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
            <h1>MATCHITY</h1>
            <h2>Here are your options: </h2>

            {/* <div id="charities">
                <Charity></Charity>
            </div> */}
            <button type="button" id="finalizeLink" onClick={ () => { navigate('/results')} }> Finalize matching </button>
        </>
    )
}

export default Matching
