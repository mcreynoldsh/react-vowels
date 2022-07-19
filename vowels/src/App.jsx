import './App.css';

// react
import { useState } from "react"
import MyOutputLabel from "./components/MyOutputLabel.jsx"

function App() {
  // states
  const [userInput, setUserInput] = useState('')

  // event handlers
  // const handleChange = event => {
  //   setUserInput(event.target.value)
  // };

  const handleClick = event => {
    event.preventDefault();
    let inputVal = document.getElementById("myInput").value;
    setUserInput(inputVal)
  }

  // render
  return (
    <div>
      <input id='myInput' type="text"/>
      <button onClick={handleClick}>Show Vowels</button>
      <MyOutputLabel myValue = {userInput} />
    </div>
  )
}

export default App; 

