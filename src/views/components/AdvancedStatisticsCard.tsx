import React from 'react'

interface AdvancedStatisticsCardProps {
    title: string
    desc: string
    img: string
}

const AdvancedStatisticsCard: React.FC<AdvancedStatisticsCardProps> = (props:AdvancedStatisticsCardProps) => {
  return (
    <div className='advanced-statistics-card-container'>
        <div className="advanced-statistics-card-icon-wrapper">
            <img src={props.img} alt={props.title} />
        </div>
        <div className="advanced-statistics-card-dash-desktop">
          <div className="dash-desktop"></div>
        </div>
        <div className="advanced-statistics-card-title">{props.title}</div>
        <div className="advanced-statistics-card-desc">{props.desc}</div>
        <div className="advanced-statistics-card-dash-mobile">
        <div className="dash-mobile"></div>
        </div>
    </div>
  )
}

export default AdvancedStatisticsCard