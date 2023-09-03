import React from 'react'
import "./index.css"

const Pageone = () => {
  return (
    <div className='page-one-container'>
        <div className='images-container'>
            <div className='image-container'>
                <img  className="one-img1" src="https://res.cloudinary.com/dwkuugaam/image/upload/v1693720013/p1_bhwqqe.png" alt="image1" />
                <div className='image-heading'>
                    <h1>Jenny Wilson</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                </div>
            </div>
            <div className='image-container'>
                <img className="one-img2" src="https://res.cloudinary.com/dwkuugaam/image/upload/v1693720015/p2_pdiwib.png" alt="image1" />
                <div className='image-heading'>
                    <h1>Jenny Wilson</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                </div>
            </div>
            <div className='image-container'>
                <img className="one-img3" src="https://res.cloudinary.com/dwkuugaam/image/upload/v1693720014/p3_mtr5s9.png" alt="image1" />
                <div className='image-heading'>
                    <h1>Jenny Wilson</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                </div>
            </div>

        </div>
        <div className='text-container'>
            <h1 className='main-heading'>Tropic Adventure <span>for Students</span></h1>
            <h6>Student Tropical Vacation:Relax and Recharge</h6>
            <ul className='list-container'>
                <li className='list-item'>Lorem ipsum dolor sit amet</li>
                <li className='list-item'>Massa quis natoque sit quam</li>
                <li className='list-item'>Eros non peilentesque elit</li>
                <li className='list-item'>tortor id euismod habitant</li>
                <li className='list-item'>Sed suspendisse id in ultrices</li>
            </ul>
            <button type='button'>Explore More</button>
        </div>
    </div>
  )
}

export default Pageone