import React, { useContext } from 'react'
import './ProductDisplay.css'
import start_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
export const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className="productdisplay-image">
                <img className='productdisplay-main-img' src={product.image} alt=''></img>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.title}</h1>
            <div className="productdisplay-right-star">
                <img src={start_icon} alt=''/>
                <img src={start_icon} alt=''/>
                <img src={start_icon} alt=''/>
                <img src={start_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">Rs{product.prev_price}</div>
                <div className="productdisplay-right-price-new">Rs{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum amet eius aspernatur fugiat commodi voluptatem, veritatis animi repellat? Nihil omnis ipsa ipsum maiores quibusdam sint, ex ratione doloribus distinctio! Perferendis dolorem vero aut facere provident id neque quidem itaque corporis, repudiandae assumenda aliquam exercitationem fugiat deserunt quaerat accusantium. Ipsum, sed?
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
            <p className='productdisplay-right-category'><span>Category:</span>Women, T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags:</span>Modern, Latest</p>
        </div>
    </div>
  )
}
