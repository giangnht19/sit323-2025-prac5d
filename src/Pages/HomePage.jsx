import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Hero from '../Components/Hero/Hero'
import Benefit from '../Components/Benefit/Benefit'
import Title from '../Components/Title/Title'
import About from '../Components/About/About'
import Events from '../Components/Events/Events'
import Testimonials from '../Components/Testimonials/Testimonials'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer'

const HomePage = () => {
  const [playState, setPlayState] = React.useState(false);

  return (
    <div>
      <Hero/>
      <div className='container'>
        <Title subTitle = 'Why Join Us' title = 'What We Offer'/>
        <Benefit />
        <About setPlayState={setPlayState}/>
        <Title subTitle = 'Gallery' title = 'Event Photos'/>
        <Events />
        <Title subTitle = 'TESTIMONIAL' title = 'What Our Members Say'/>
        <Testimonials />
        <Title subTitle = 'Contact Us' title = 'Get in Touch'/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default HomePage
