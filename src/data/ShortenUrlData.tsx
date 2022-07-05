import React from "react";
import { useEffect } from "react";

const axios = require("axios");

interface ShortenUrlDataProps {
  longURL: string;
  setShortUrlList: React.Dispatch<React.SetStateAction<string[]>>;
  shortUrlList: string[];
}

type ResponseShortLink = {
  full_short_link: string
}

type ResponseResult = {
  result: ResponseShortLink
}

type ResponseData = {
  data: ResponseResult
}

const ShortenUrlData: React.FC<ShortenUrlDataProps> = (
  props: ShortenUrlDataProps
) => {
  useEffect(() => {
    if (props.longURL !== "") {
      const newURL = "https://api.shrtco.de/v2/shorten?url=" + props.longURL;
      axios
        .get(newURL)
        .then((response: ResponseData) => {
          const newShortUrl = response.data.result.full_short_link
          // Push all links to state...
          props.setShortUrlList([
            ...props.shortUrlList, newShortUrl
          ])
        })
        .catch((error: String) => {
          console.log(error);
        })
        .then(() => {
          // This will always execute...
        });
    }
  }, [props.longURL]);

  return <></>;
};

export default ShortenUrlData;
