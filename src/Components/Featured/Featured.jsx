import React from 'react'
import './Featured.css';
import data_product from '../Assets/data'
import { Card } from '../Category Components/Card'
// import FeaturedCard from './FeaturedCard';

export const Featured = () => {
  return (
    <div id="categories">
        <div className="title">
            <h2>Featured Products</h2>
        </div>
        <div className="categories-container container">
           {
            data_product.map((featured,i) => {
                return <Card key={i} id={featured.id} image={featured.image} title={featured.title} new_price={featured.new_price} prev_price={featured.prev_price}/> 
            })
           }

        </div>

    </div>
  )
}
