import './Price.css'
import { Input } from '../../Category Components/Input'
export const Price = ({handleChange}) => {
  return (
    <div className='ml'>
      <h2 className='price-title'>Price</h2>
      <div className="sidebar-label-container">
      <label className="sidebar-label-container">
        <input onChange={handleChange} type='radio' value="" name='test2'/>
        <span className='checkmark'></span>All
      </label>
      <Input
       handleChange={handleChange}
       value={500}
       title="R0 - 500"
       name="test2"
      />
      <Input
       handleChange={handleChange}
       value={1000}
       title="500 - 1000"
       name="test2"
      />
      <Input
       handleChange={handleChange}
       value={5000}
       title="1000 - 5000"
       name="test2"
      />
      <Input
       handleChange={handleChange}
       value={10000}
       title="5000 - 10000"
       name="test2"
      />
      </div>
    </div>
  )
}
