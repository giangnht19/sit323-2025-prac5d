import React from 'react'
import "./Benefit.css"
import benefit_1 from "../../assets/benefit-1.png"
import benefit_2 from "../../assets/benefit-2.png"
import benefit_3 from "../../assets/benefit-3.png"
import program_icon_1 from "../../assets/program-icon-1.png"
import program_icon_2 from "../../assets/program-icon-2.png"
import program_icon_3 from "../../assets/program-icon-3.png"
import white_arrow from "../../assets/white-arrow.png"

const Benefit = () => {
  return (
    <div className='benefits' id='benefits'>
            <div className="benefit">
                <img src={benefit_1} alt="" />
                <div className="caption">
                    <img src={program_icon_2} alt="" />
                    <p>Networking Oppotunities</p>
                </div>
            </div>
            <div className="benefit">
                <img src={benefit_2} alt="" />
                <div className="caption">
                    <img src={program_icon_1} alt="" />
                    <p>Exclusive Events</p>
                </div>
            </div>
            <div className="benefit">
                <img src={benefit_3} alt="" />
                <div className="caption">
                    <img src={program_icon_3} alt="" />
                    <p>Community Engagement</p>
                </div>
            </div>
    </div>
  )
}

export default Benefit
