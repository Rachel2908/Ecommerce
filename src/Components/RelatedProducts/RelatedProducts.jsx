import React from 'react'
import data_product from '../Assets/data'
import './RelatedProduct.css'
import { Card } from '../Category Components/Card'
export const RelatedProducts = () => {
  return (
    <div className='relatedProducts'>
        <h1>Related Products</h1>
        <hr/>
        <div className="relatedproducts-items">
            {data_product.map((item,i)=>{
                return <Card key={i} id={item.id} title={item.title} image={item.image} prev_price={item.prev_price} new_price={item.new_price}/>
             })
             }
        </div>
    </div>
  )
}
