import React, { useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import '../../src/Pages/CSS/EventPage.css'

const EventPage = () => {
  const [showEventForm, setShowEventForm] = useState(false);

  const handleCreateEvent = () => {
    setShowEventForm(true);
  }

  return (
    <div>
      <NavBar isDarkNav={true} />
    </div>
  )
}

export default EventPage
