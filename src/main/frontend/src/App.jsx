import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import Matching from './Pages/Matching'
import Results from './Pages/Results'

// Matchity Result
function App() {

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