import React from 'react'
import animateMenu from '../js/animateMenu'

function header() {


    return (
        <>
            <header>
                <h1 class="logo">Acme</h1>
                <input type="checkbox" id="mobile-nav" />
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <label for="mobile-nav" class="mobile-nav-label" onClick={(e) => animateMenu(e, document.querySelector('#mobile-nav'))}>
                    <span class="before"></span>
                    <span class="middle"></span>
                    <span class="after"></span>
                </label>
            </header>
        </>
    )
}

export default header
