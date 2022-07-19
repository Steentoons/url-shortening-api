import React from "react";
import Button from "./Button";
import "../styles/shortenUrlInput.css";

// Setting the props interface...
interface ShortenUrlInputProps {
  setLongURL: React.Dispatch<React.SetStateAction<string>>;
}

// ShortenUrlInput Component...
const ShortenUrlInput: React.FC<ShortenUrlInputProps> = (
  props: ShortenUrlInputProps
) => {
  const shortenUrlHandler = (): void => {
    // Validate the form input...
    const myInput = document.querySelector("input")!;
    const inputErrorDiv = document.getElementById("inputError")!;
    const myInputVal: string = myInput.value;

    if (myInputVal === "") {
      console.log();
      inputErrorDiv.innerHTML = "Sorry, enter your url first...";

      return;
    } else {
      inputErrorDiv.innerHTML = "";

      // Invoke the api call via state change...
      props.setLongURL(myInputVal);
    }

    return;
  };
  return (
    <div className="shorten-url-input-container">
      <div className="shorten-url-input-wrapper">
        <div className="shorten-url-input-div">
          <input type="text" id="myURL" />
          <div className="shorten-url-input-error-wrapper">
            <div id="inputError" className="shorten-url-input-error"></div>
          </div>
        </div>
        <div
          onClick={() => shortenUrlHandler()}
          className="shorten-url-input-button-wrapper"
        >
          <Button content="Shorten It!" background={true} />
        </div>
      </div>
    </div>
  );
};

export default ShortenUrlInput;
