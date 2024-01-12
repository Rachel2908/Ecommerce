import React, { useContext } from 'react'
import { RiShoppingCart2Line, RiStarFill, RiStarHalfFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';

//Using context react hooks here to add item through card icon on the card
export const Card = (props) => {
  const {addToCart} = useContext(ShopContext);
  return (
    <section className='item-card'>
      <div className="image-container">
        <Link to={`/products/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt={props.title}/></Link>
        </div>
        <div className="item-details">
          <h3 className='item-title'>{props.title}</h3>
          <section className='item-reviews'>
            <RiStarFill className='rating-star'/>
            <RiStarFill className='rating-star'/>
            <RiStarFill className='rating-star'/>
            <RiStarFill className='rating-star'/>
            <RiStarHalfFill className='rating-star'/>
            <span className='total-review'>(127 Reviews)</span>
          </section>
          <section className='item-price'>
            <div className="price">
              <del> Rs{ props.prev_price } </del> Rs{ props.new_price }
            </div>
            <div className="bag">
              <RiShoppingCart2Line onClick={()=>{addToCart(props.id)}} className='bag-icon'/>
            </div>
          </section>
        </div>
      </section>
  )
}
