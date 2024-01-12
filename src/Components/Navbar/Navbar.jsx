import React, { useContext } from 'react'
import './Navbar.css'
import {RiSearchLine, RiShoppingCartFill, RiMenu2Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <header>
    {/* Hearder Part*/}
        <nav id='navbar'>
            <div className='tn-container container'>
                <h3>SOY</h3>
                <div className='search-box'>
                    <input type='search' name='search' id='' placeholder='Search For Products'></input>
                    <div className='search-icon'><RiSearchLine/></div>
                </div>
                <div className='nav-login-cart'>
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><RiShoppingCartFill/><span className='count'>{getTotalCartItems()}</span></Link>
                </div>
            </div>
            
            <div className='bn-container container'>
                <ul className='nav-lists'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </div>
            

        </nav>
    </header>
  )
}