import React from 'react'
import "./PageFive.css"

const PageFive = () => {
  return (
    <div className='page-five-container'>
        <h1 className='name'>Testimonials</h1>
        <div className='five-images-container'>
            <div className='five-image-container'>
                <img className='img1' src="https://res.cloudinary.com/dwkuugaam/image/upload/v1693718993/c3_pcfoan.png" alt="image1" />
                <hr />
                <div className='five-image-heading'>
                    <h1>Corey Korsgaad</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                </div>
            </div>
            <div className='five-image-container'>
                <img className='img2' src="https://res.cloudinary.com/dwkuugaam/image/upload/v1693718992/c2_dhxkzo.png" alt="image1" />
                <hr />
                <div className='five-image-heading'>
                    <h1>Jakob Aminoff</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                </div>
            </div>
            <div className='five-image-container'>
                <img className='img3' src="https://res.cloudinary.com/dwkuugaam/image/upload/v1693718992/c1_ochpte.png" alt="image1" />
                <hr />
                <div className='five-image-heading'>
                    <h1>Carla Press</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                </div>
            </div>

        </div>
        <div className='five-text'>
            <h1>Student Special: Discounted rates <br/> on tropical getaways!</h1>
            <p>Let's embody your beautiful ideas together, simply the way you visualize your next bif things.</p>
        </div>
        <div className='five-container'>
          <h1>Privacy Policy</h1>
          <h1>Terms of Use</h1>
          <h1>Sales and Refunds</h1>
          <h1>Legal</h1>
          <h1>About</h1>
          <h1>Schedules</h1>
          <h1>Pricing</h1>
          <h1>Membership</h1>
          <h1>Joins</h1>
        </div>
    </div>
  )
}

export default PageFive