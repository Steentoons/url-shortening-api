import React from 'react'
import ShortenUrlInput from './ShortenUrlInput';
import ShortenUrlData from "../../data/ShortenUrlData"
import ShoortenUrlLists from './ShoortenUrlLists';
import AdvancedStatistics from './AdvancedStatistics';
import "../styles/middleSectionWrapper.css"

interface MiddleSectionWrapperProps {
    longURL: string;
    setLongURL: React.Dispatch<React.SetStateAction<string>>;
    shortUrlList: string[];
    setShortUrlList: React.Dispatch<React.SetStateAction<string[]>>;
}

const MiddleSectionWrapper: React.FC<MiddleSectionWrapperProps> = (props:MiddleSectionWrapperProps) => {
  return (
    <div className='middle-section-wrapper-container'>
    <ShortenUrlData longURL= {props.longURL} setShortUrlList={props.setShortUrlList} shortUrlList={props.shortUrlList} />
    <div className="middle-section-wrapper-div">
    <ShortenUrlInput setLongURL={props.setLongURL} />
    <ShoortenUrlLists shortUrlList={props.shortUrlList} />
    </div>

    <AdvancedStatistics />
    
    </div>
  )
}

export default MiddleSectionWrapper