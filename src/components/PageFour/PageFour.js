import React from 'react'
import "./PageFour.css"

const PageFour = () => {
  return (
    <div className='four-container'>
        <div className='image-four-container'>
          <img src="https://res.cloudinary.com/dwkuugaam/image/upload/v1693716713/Group_167_jv1kge.png" alt="man" className='image' />
        </div>
        <div className='card-container'>
            <div className='book-card-container'>
            <h1>Book now</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className='city-container'>
                <label htmlFor="city">CITY</label>
                <input type="text" id="city" placeholder='placeholder' />

            </div>
            <div className='arrival-departure-container'>
                <div className='arrival-container'>
                    <label htmlFor="arrival">ARRIVAL</label>
                    <input type="text"id="arrival" placeholder='placeholder' />

                </div>
                <div className='departure-container'>
                    <label htmlFor="departure">DEPARTURE</label>
                    <input type="text" id="departure" placeholder='placeholder' />
                </div>
            </div>
            <div className='start-end-container'>
                <div className='start-container'>
                    <label htmlFor="start">START</label>
                    <input type="text" id="start" placeholder='placeholder' />
                </div>
                <div className='room-container'>
                    <label htmlFor="room">ROOM</label>
                    <input type="text" id="room" placeholder='placeholder' />
                </div>
            </div>
            </div>
            <button type="button" className='book'>Book Now</button>
            
        </div>
    </div>
  )
}

export default PageFour