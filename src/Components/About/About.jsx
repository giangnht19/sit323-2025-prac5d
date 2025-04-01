import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Connecting Students, Creating Opportunities</h2>
        <p>Campus Culture is a dynamic platform designed to connect individuals within the campus community, fostering engagement, collaboration, and personal growth. Our mission is to create an inclusive environment where students, faculty, and staff can discover events, join interest-based groups, and participate in activities that enrich their campus experience. Whether you're looking to expand your network, explore new interests, or engage in meaningful projects, Campus Culture makes it easy to connect with like-minded individuals.</p>
        <p>Through our intuitive platform, users can navigate through upcoming events, join clubs, and even create their own gatherings to bring the campus closer together. Campus life is more than just academics, and we believe that building strong connections is essential to a fulfilling college experience. By bridging the gap between social, academic, and professional life, Campus Culture helps you make the most out of your time on campus. Join us in building a vibrant, connected community today!</p>
      </div>
    </div>
  )
}

export default About
