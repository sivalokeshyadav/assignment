import React from 'react'
import "./PageThree.css"


const PageThree = () => {
  return (
    <div className='page-three-container'>
        <div className='text-container'>
        <h4>Get 20% off for student</h4>
            <h1 className='main-heading'>Student discounts available. <span>Get ready for some fun in the sun!</span></h1>
            
            <ul className='list-container'>
                <li className='list-item'>Lorem ipsum dolor sit amet</li>
                <li className='list-item'>Massa quis natoque sit quam</li>
                <li className='list-item'>Eros non peilentesque elit</li>
                <li className='list-item'>tortor id euismod habitant</li>
                <li className='list-item'>Sed suspendisse id in ultrices</li>
            </ul>
            <button type='button'>Explore More</button>
        </div>
        <div className='image-home-container'>
          <img src="https://res.cloudinary.com/dwkuugaam/image/upload/v1693716714/Mask_group_gqsdlf.png" alt="man" className='image' />
        </div>
    </div>
  )
}

export default PageThree