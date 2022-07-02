import React from 'react'
import "../styles/shortenUrlInput.css"

const ShortenUrlInput = () => {

  const shortenUrlHandler = (): void => {
    // Validate the form input...
    const myInput = document.querySelector("input")!
    const myInputVal:string = myInput.value

    if(myInputVal === "" ) {
      console.log(`The Error is`)
    }
    // Invoke the spi call via state change...

    return
  }
  return (
    <div className='shorten-url-input-container'>
      <input type="text" placeholder="Shorten a link here"/>
      <button onClick={() => shortenUrlHandler()}>Shorten It!</button>
    </div>
  )
}

export default ShortenUrlInput