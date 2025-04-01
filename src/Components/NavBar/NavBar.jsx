import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

const NavBar = ({ isDarkNav = false }) => {
  const [sticky, setSticky] = React.useState(false);
  
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
        setSticky(true)
      }else{
        setSticky(false)
      }
    })
  } , [])

  const [mobilemenu, setMobileMenu] = React.useState(false)
  const toggleMenu = () => {
    mobilemenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky || isDarkNav ? 'dark-nav' : ''}`}>
      <Link to="/">
        <img src={logo} alt="logo" className='navbar-logo'/>
      </Link>
      <ul className={mobilemenu ? '' : 'mobile-menu'}>
        <li><Link to="/">Home</Link></li>  
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/benefit">Benefits</Link></li>  
        <li><Link to="/testimonials">Testimonials</Link></li>   
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/signup"><button className='btn'>Sign Up</button></Link></li>  
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default NavBar
