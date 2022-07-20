import React from 'react'
import AdvancedStatisticsCard from './AdvancedStatisticsCard'
import "../styles/advancedStatistics.css"

const statisticsIcon1 = require("../../assets/images/advanced-statistics/icon1.png")
const statisticsIcon2 = require("../../assets/images/advanced-statistics/icon2.png")
const statisticsIcon3 = require("../../assets/images/advanced-statistics/icon3.png")

const AdvancedStatistics = () => {
    const printStatistics = advancedStatisticsData.map((item, idx) => {
        return (
            <AdvancedStatisticsCard key={idx} img={item.img} title={item.title} desc={item.desc} />
        )
    })
  return (
    <div className='advanced-statistics-container'>
        <div className="advanced-statistics-content-wrapper">
            <div className="advanced-statistics-content-title">Advanced Statistics</div>
            <div className="advanced-statistics-content-desc">Track how links are performing across the web with our advanced statistics dashboard</div>
        </div>
        <div className="advanced-statistics-data-wrapper">
            {printStatistics}
        </div>
    </div>
  )
}

export default AdvancedStatistics

const advancedStatisticsData = [
    {
        img: statisticsIcon1,
        title: "Brand Recognition",
        desc: "Track how links are performing across the web with our advanced statistics dashboard"
    },
    {
        img: statisticsIcon2,
        title: "Detailed Records",
        desc: "Gain insights into who is clicking your links . Knowing when and where people engage with your content helps inform better decissions."
    },
    {
        img: statisticsIcon3,
        title: "Fully Customizable",
        desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engaugement."
    }
]