import { useState } from 'react'
import AnalyseData from './gem'
import './App.css'

// Matchity Results

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>hello</p>
        <input name="Prompt" type="text" id="information"></input>
        <input type="submit"></input>
      </div>
    </>
  )

}

export default App