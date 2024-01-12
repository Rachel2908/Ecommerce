import React, { useState } from 'react'
import { Sidebar } from '../Components/Sidebar/Sidebar'
import { Item } from '../Components/Item/Item'
import { Card } from '../Components/Category Components/Card'
import { Recommended } from '../Components/Recommended/Recommended'
import products from '../Components/Assets/all_product';

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ id, category,newPrice, title }) =>
        id === selected ||
          category === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ id, image, title, category, prev_price, new_price }) => (
        <Card
          key={Math.random()}
          id={id}
          image={image}
          title={title}
          category={category}
          prev_price={prev_price}
          new_price={new_price}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  return (
    <div>
      <Recommended handleClick={handleClick}/>
      <Sidebar handleChange={handleChange}/>
      <Item result = {result}/>
    </div>
  )
}
