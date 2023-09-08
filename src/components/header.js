import React, { useState, useEffect } from 'react'
function Header() {

    return (
        <header>
            <h1 className="logo">Acme</h1>
            <input type="checkbox" id="mobile-nav" />
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <label for="mobile-nav" className="mobile-nav-label">
                <span></span>
            </label>
        </header>
    )
}

export default Header
