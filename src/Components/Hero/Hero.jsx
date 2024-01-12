import React from 'react'
import './Hero.css';

export const Hero = () => {
  return (
    <div id='hero'>
      <div className='hero-container container'>
        <div className='hero-left'>
          <h1>Style Your Shade, Embrace Yourself</h1>
          <h3>WINTER SALE 50% OFF</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni a ut tenetur quas eligendi harum ratione sit nulla impedit? Unde earum praesentium aliquid.</p>
          
            <button className='btn'>Shop Now</button>
        </div>
        <div className="hero-right">
            
              <img src={require('../Assets/hero2.png')} alt=''></img>
        </div>
      </div>
    </div>
  )
}
