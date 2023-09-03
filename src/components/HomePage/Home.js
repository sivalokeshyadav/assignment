import React from 'react'
import "./Home.css"

const Home = () => {
    
  return (
    <div className='container'>
      <div className='header'>
        <div className='header-scroll'>
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Schedules</h1>
          <h1>Pricing</h1>
        </div>
        <div className='header-not-scroll'>
          <h1>Offers</h1>
          <h1 className='courses'>Courses</h1>
        </div>
        
      </div>
      <div className='main-container'>
        <div className='main-text-container'>
          <h5>Discover the beauty of the trophics</h5>
          <h1 className='main-heading'>Tropical Destinations <span>For Students</span></h1>
          <p className='para'>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bubendum integer rutrum nisi. A nec nisi vitae</p>
          <button type='button' >SIGN UP</button>
        </div>
        <div className='image-home-container'>
          <img src="https://res.cloudinary.com/dwkuugaam/image/upload/v1693716715/Group_171_f3dhhc.png" alt="man" className='image' />
        </div>
      </div>
    </div>
  )
}

export default Home