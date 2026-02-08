import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Matching from './Pages/Matching'
import Results from './Pages/Results'
import data from './Website/Matchity_input_script'

// Matchity Result
function App() {
  console.log(data);

  return ( // call form handler on submit, home is default route
    <Router>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/matching" element={ <Matching/> }/>
        <Route path="/results" element={ <Results/> } />
      </Routes>
    </Router>
  )

}

export default App