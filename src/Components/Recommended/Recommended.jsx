import React from 'react'
import './Recommended.css'
import { Button } from '../Category Components/Button'
export const Recommended = ({handleClick}) => {
  return (
    <>
    <div className='r-container'>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">
       <Button onClickHandler={handleClick} value="" title="All Products"/>
       <Button onClickHandler={handleClick} value="men" title="Men"/>
       <Button onClickHandler={handleClick} value="women" title="Women"/>
       <Button onClickHandler={handleClick} value="shoes" title="Shoes"/>
       <Button onClickHandler={handleClick} value="watch" title="Watch"/>
      </div>
    </div>
    </>
  )
}
