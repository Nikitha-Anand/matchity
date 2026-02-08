import { Link, useNavigate } from "react-router-dom";

function Results() {
    return (
        <>
            <h1> Here are the results of your search: </h1>
            <Link to="/"> Redo matching</Link>
        </>
    )
}

export default Results