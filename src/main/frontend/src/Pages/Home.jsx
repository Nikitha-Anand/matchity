import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '/src/App.css'

// Matchity Result

function Home() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  
  const handleForm = (event) => { // Form handler
    event.preventDefault(); // prevent the webpage from sending the data to itself -> default behaviour
    let form = event.target;
    let formData = new FormData(form); // Create form data object
    let formDataObject = Object.fromEntries(formData.entries()); // key value pairs
    let json = JSON.stringify(formDataObject);
    localStorage.setItem("JSON", json);

    console.log(json);
    navigate('/matching');
  }

  return ( // call form handler on submit
    <>
      <div>
        <h1>Please enter your preferences:</h1>
        <form onSubmit={ handleForm } className="home-form">
        <label>Please enter the type of the charity: </label>
        <input type="text" name="theme" id="theme_entry" required></input>
        <label>Please enter your budget: </label> 
        <input type="text" name="budget" id="budget_entry" required></input>
        <button type="submit" id="submit">Submit preferences</button>
        </form>
      </div>
    </>
  )

}

export default Home
