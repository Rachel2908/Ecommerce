import React from 'react'
import './CSS/ShippingInfo.css'
import { Link } from 'react-router-dom'

export const ShippingInfo = () => {
    
    return (
        <>
        <div class="shipping-container">
            <h1>Shipping Information</h1> 
            <div class="form">

                <div class="fields fields--2">
                    <label class="field">
                        <span class="field__label" for="firstname">First name</span>
                        <input class="field__input" type="text" id="firstname"  />
                    </label>
                    <label class="field">
                        <span class="field__label" for="lastname">Last name</span>
                        <input class="field__input" type="text" id="lastname"  />
                    </label>
                </div>
                <label class="field">
                    <span class="field__label" for="address">Address</span>
                    <input class="field__input" type="text" id="address" />
                </label>
                <label class="field">
                    <span class="field__label" for="country">Country</span>
                    <select class="field__input" id="country">
                        <option value=""></option>
                        <option value="unitedstates">United States</option>
                        <option value="india">India</option>
                    </select>
                </label>
                <div class="fields fields--3">
                    <label class="field">
                        <span class="field__label" for="zipcode">Zip code</span>
                        <input class="field__input" type="text" id="zipcode" />
                    </label>
                    <label class="field">
                        <span class="field__label" for="city">City</span>
                        <input class="field__input" type="text" id="city" />
                    </label>
                    <label class="field">
                        <span class="field__label" for="state">State</span>
                        <select class="field__input" id="state">
                            <option value="odisha">Odisha</option>
                            <option value="chattisgarh">Chattisgarh</option>
                        </select>
                    </label>
                </div>
                <Link to='/confirmation'><button class="shipping-button">Continue</button></Link>
            </div>
                
        </div>
        </>
    )
}
