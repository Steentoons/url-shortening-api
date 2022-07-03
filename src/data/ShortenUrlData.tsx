import React from "react";
import { useEffect } from "react";

const axios = require("axios");

interface ShortenUrlDataProps {
  longURL: string;
}

const ShortenUrlData: React.FC<ShortenUrlDataProps> = (
  props: ShortenUrlDataProps
) => {
  useEffect(() => {
    if (props.longURL !== "") {
      const newURL = "https://api.shrtco.de/v2/shorten?url=" + props.longURL;
      axios
        .get(newURL)
        .then((response: String) => {
          console.log(response);
        })
        .catch((error: String) => {
          console.log(error);
        })
        .then(() => {
          console.log("This was called...");
        });
    }
  }, [props.longURL]);

  return <></>;
};

export default ShortenUrlData;
