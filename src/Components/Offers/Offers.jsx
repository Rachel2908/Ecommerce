import React from 'react'
import './Offers.css'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className='offer-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only on best seller products</p>
            <button>Check Now</button>
        </div>
        <div className='offer-right'>
            <img src={require('../Assets/hero4.png')}/>
        </div>
    </div>
  )
}
