import React, { useState } from "react";
import ShortenUrlInput from "./ShortenUrlInput";
import ShortenUrlData from "../../data/ShortenUrlData";
import ShoortenUrlLists from "./ShoortenUrlLists";
import AdvancedStatistics from "./AdvancedStatistics";
import "../styles/middleSectionWrapper.css";

type ShortUrlListObj = {
  newLongUrl: string
  newShortUrl: string
  copyState: boolean
}

interface MiddleSectionWrapperProps {
  longURL: string;
  setLongURL: React.Dispatch<React.SetStateAction<string>>;
  shortUrlList: ShortUrlListObj[];
  setShortUrlList: React.Dispatch<React.SetStateAction<ShortUrlListObj[]>>;
}

const MiddleSectionWrapper: React.FC<MiddleSectionWrapperProps> = (
  props: MiddleSectionWrapperProps
) => {

  const [shortenButtonClicked, setShortenButtonClicked] = useState(false);
  const [fetching, setFetching] = useState<boolean>(false)

  return (
    <div className="middle-section-wrapper-container">
      <ShortenUrlData
        longURL={props.longURL}
        setShortUrlList={props.setShortUrlList}
        shortUrlList={props.shortUrlList}
        setLongURL={props.setLongURL}
        shortenButtonClicked={shortenButtonClicked}
        setShortenButtonClicked={setShortenButtonClicked}
        setFetching={setFetching}
      />
      <div className="middle-section-wrapper-div">
        <ShortenUrlInput setLongURL={props.setLongURL} setShortenButtonClicked={setShortenButtonClicked} fetching={fetching} />
        <ShoortenUrlLists shortUrlList={props.shortUrlList} setShortUrlList={props.setShortUrlList} />
      </div>

      <AdvancedStatistics />
    </div>
  );
};

export default MiddleSectionWrapper;
