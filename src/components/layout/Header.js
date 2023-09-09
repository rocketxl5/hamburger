import React, { useState, useEffect } from 'react'
import useSetBrowser from '../hooks/useSetBrowser'

function Header() {
    const { crios } = useSetBrowser()
    // const [rea, setBrowser] = useState('')
    document.addEventListener('visibilitychange', () => {

        console.log(document.hidden)
        if (!document.hidden) {
            window.location.reload(true)
            // if (!localStorage.getItem('reload')) {
            //     localStorage.setItem('reload')
            // }
            // console.log(localStorage.getItem('reload'))
        }
    })


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
            <label htmlFor="mobile-nav" className="mobile-nav-label">
                <span></span>
            </label>
            <h1></h1>
        </header>
    )
}

export default Header
