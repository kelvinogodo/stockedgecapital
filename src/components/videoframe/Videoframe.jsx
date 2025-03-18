import React from 'react'
import './videoframe.css'
const Videoframe = () => {
  return (
      <section className='videoframe-section'>
      <div className="video-wrapper">
        <div className="videoframe-text-container">
          <h1>where the <span className="highlight">forex </span>market is going</h1>
        </div>
              <video src="/chart-big.hvc1.6af4110d38611a03c3a4.mp4" className='video' autoPlay='true'></video>
          </div>
    </section>
  )
}

export default Videoframe