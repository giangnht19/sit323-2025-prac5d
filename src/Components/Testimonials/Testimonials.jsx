import React, { useRef } from 'react'
import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;


    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Alice Smith</h3>
                            <span>Deakin, Burwood, AU</span>
                        </div>
                    </div>
                    <p>Alice is motivated by the opportunity to network with students from diverse backgrounds, build a strong social circle, and succeed in her studies</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>David Smith</h3>
                            <span>Deakin, Burwood, AU</span>
                        </div>
                    </div>
                    <p>David is motivated by the prospect of creating lasting friendships onnections that can benefit him both professionally and personally in the future.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Alex Johnson</h3>
                            <span>Deakin, Burwood, AU</span>
                        </div>
                    </div>
                    <p>Alex is motivated by the opportunity to make a positive impact on campus life and create lasting connections between his peers.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Emily Stevens</h3>
                            <span>Deakin, Burwood, AU</span>
                        </div>
                    </div>
                    <p>Emily is motivated by the opportunity to learn from diverse perspectives and cultures, as well as to enhance her college experience through social interactions.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
