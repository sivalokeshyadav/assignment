import React from 'react'
import "./PageTwo.css"

const PageTwo = () => {
  return (
    <div className='page-two-container'>
        <h1>Our Destinations</h1>
        <div className='two-cards-item-container'>
            <div className='two-card-container'>
                <div className='two-image-container'>
                <img src="https://res.cloudinary.com/dwkuugaam/image/upload/v1693716714/card-image_vvr8rc.png" alt="Harvard" />
                </div>
                <h1>Harvard University</h1>
                <div className='sub-heading'>
                    <h5>Cambridge,Massachusetts,UK</h5>
                    <h5>...</h5>
                </div>
            </div>
            <div className='two-card-container'>
                <div className='two-image-container'>
                <img src="https://res.cloudinary.com/dwkuugaam/image/upload/v1693716714/card-image-1_usxvuf.png" alt="Harvard" />
                </div>
                <h1>Oxford University</h1>
                <div className='sub-heading'>
                    <h5>Oxford, England</h5>
                    <h5>...</h5>
                </div>
            </div>
            <div className='two-card-container'>
                <div className='two-image-container'>
                <img src="https://res.cloudinary.com/dwkuugaam/image/upload/v1693716715/card-image-2_f2nmx2.png" alt="Harvard" />
                </div>
                <h1>Standford University</h1>
                <div className='sub-heading'>
                    <h5>Standford, California</h5>
                    <h5>...</h5>
                </div>
            </div>
            <div className='two-card-container'>
                <div className='two-image-container'>
                <img src="https://res.cloudinary.com/dwkuugaam/image/upload/v1693716715/card-image-2_f2nmx2.png" alt="Harvard" />
                </div>
                <h1>Nanyang Technology</h1>
                <div className='sub-heading'>
                    <h5>Nanyang Ave, Singapura</h5>
                    <h5>...</h5>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default PageTwo