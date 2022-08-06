import React from "react";
import { useEffect } from "react";

const axios = require("axios");

type ShortUrlListObj = {
  newLongUrl: string
  newShortUrl: string
  copyState: boolean
}

interface ShortenUrlDataProps {
  longURL: string;
  setShortUrlList: React.Dispatch<React.SetStateAction<ShortUrlListObj[]>>;
  shortUrlList: ShortUrlListObj[];
  setLongURL: React.Dispatch<React.SetStateAction<string>>
  shortenButtonClicked: boolean
  setShortenButtonClicked: React.Dispatch<React.SetStateAction<boolean>>
  setFetching: React.Dispatch<React.SetStateAction<boolean>>
}

type ResponseShortLink = {
  full_short_link: string
  original_link: string
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
    if (props.shortenButtonClicked) {
      const newURL = "https://api.shrtco.de/v2/shorten?url=" + props.longURL;
      props.setFetching(true)
      axios
        .get(newURL)
        .then((response: ResponseData) => {
          const newShortUrl = response.data.result.full_short_link
          const newLongUrl = response.data.result.original_link

          // Push all links to state...
          const newShortUrlObj = {newLongUrl, newShortUrl, copyState: false}
          props.setShortUrlList([
            ...props.shortUrlList, newShortUrlObj
          ])
          props.setFetching(false)
        })
        .catch((error: String) => {
          console.log(error);
          props.setFetching(false)
        })
    }

    return (
      props.setShortenButtonClicked(false)
    )
  }, [props.shortenButtonClicked]);

  return <></>;
};

export default ShortenUrlData;
