import React from 'react'
import "../styles/shortenUrlInput.css"

// Setting the props interface...
interface ShortenUrlInputProps {
  setLongURL: React.Dispatch<React.SetStateAction<string>>
    
  }

// ShortenUrlInput Component...
const ShortenUrlInput: React.FC<ShortenUrlInputProps> = (props: ShortenUrlInputProps) => {

  const shortenUrlHandler = (): void => {
    // Validate the form input...
    const myInput = document.querySelector("input")!
    const inputErrorDiv = document.getElementById('inputError')!
    const myInputVal:string = myInput.value

    if(myInputVal === "" ) {
      console.log()
      inputErrorDiv.innerHTML = "Sorry, enter your url first..."

      return
    } else {
      inputErrorDiv.innerHTML = ""

      // Invoke the api call via state change...
      props.setLongURL(myInputVal)
    }

    return
  }
  return (
    <div className='shorten-url-input-container'>
      <div className="shorten-url-input-div">
        <input type="text" id="myURL" />
        <div id='inputError' className="shorten-url-input-error"></div>
      </div>
      <button onClick={() => shortenUrlHandler()}>Shorten It!</button>
    </div>
  )
}

export default ShortenUrlInput