import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Featured } from '../Components/Featured/Featured'
import { Offers } from '../Components/Offers/Offers'

export const Home = () => {
  
  return (
   <div>
      <Hero/>
      <Featured/>
      <Offers/>
   </div>
  )
}
