import './Category.css'
import { Input } from '../../Category Components/Input'
export const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>
      <div className="sidebar-label-container">
      <label className="sidebar-label-container"> 
        <input onChange={handleChange} type='radio' value="" name='test'/>
        <span className='checkmark'></span>All
      </label>
      <Input
       handleChange={handleChange}
       value="men"
       title="Men"
       name="test"
      />
      <Input
       handleChange={handleChange}
       value="women"
       title="Women"
       name="test"
      />
      <Input
       handleChange={handleChange}
       value="shoes"
       title="Shoes"
       name="test"
      />
      <Input
       handleChange={handleChange}
       value="watch"
       title="Watch"
       name="test"
      />
      </div>
    </div>
  )
}
