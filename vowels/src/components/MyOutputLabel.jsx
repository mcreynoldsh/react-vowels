import {useState} from 'react'
function MyOutputLabel(props) { // accept "props" object as the first parameter
    
    let counter = 0
    const renderOutput = () => {
        let word = props.myValue
        let letters = word.split('')
        const re = RegExp('[AEIOUaeiou]')
        let elements = []
        
        for (let i = 0; i < letters.length; i++) {
          if(re.test(letters[i])){
            elements.push(<span key={`${i}`} className="vowel">{letters[i]}</span>)
            counter +=1
          }
          else{
            elements.push(<span key={`${i}`}>{letters[i]}</span>)
          }
        }  
        
        return elements
    }
  
    // render
    return (
      <div>
       { renderOutput() }
       <p>Number of Vowels: {counter}</p>
      </div>
    )
  }
  export default MyOutputLabel;