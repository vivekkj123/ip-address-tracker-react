import React from 'react'
import './Header.scss'
import arrowIcon from './icon-arrow.svg'

function Header() {
    return (
        <div className="Header">
            <h2>IP Address Tracker</h2>
            <div className="inputBox">
                
                <input type="url" placeholder='Search for any IP address or domain'/>
                <button>
        <img src={arrowIcon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Header
