import React from 'react'
import './copytrade.css'
const Copytrade = () => {
  return (
      <div className='about-section' id='about'>
        <div className="about-wrapper">
        <div className="why-choose-us-text-container about-text">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2 >we provide expert analysis for</h2>
            </div>
            <h1 data-aos="fade-up" className='copytrade-header'>copy trading using mt4 and mt5</h1>
            <p data-aos="fade-up">
                At VertexGlobalWealth, we provide accurate forex analysis to help investors maximize profits through copy trading. Using MT4 and MT5, our experts analyze the markets with technical and fundamental strategies, identifying high-probability trades. We share real-time signals, market updates, and risk assessments directly through our Telegram channel, allowing investors to copy top-performing trades effortlessly.
            </p>
        </div>
        <div className="about-img-container" data-aos="fade-up">
            <img src="/mt2.jpg" className='forex-img '/>
        </div>
        </div>
    </div>
  )
}

export default Copytrade