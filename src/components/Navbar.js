import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

const Navbar = () => {
    const items = useSelector(state => state.cart)
    return (
        <div className="d-flex">
            <div>
                <h3>Redux Store</h3>
            </div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link  to="/cart" >Cart</Link></li>
                </ul>
            </div>
            <div>
                Cart {items.length}
            </div>
        </div>
    )
}

export default Navbar
