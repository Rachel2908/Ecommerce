import './Sidebar.css'
import {Category} from './Category/Category'
import { Price } from './Price/Price'

export const Sidebar = ({handleChange}) => {
  return (
    <>
    <section className='sidebar'>
        <div className='h1-container'>
        <h1>Filters</h1>
        </div>
        <Category  handleChange={handleChange}/>
        <Price  handleChange={handleChange}/>
    </section>
    </>
  )
}
