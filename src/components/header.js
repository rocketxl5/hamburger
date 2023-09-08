import React, { useState, useEffect } from 'react'


function Header() {
    const [checked, setChecked] = useState(false)
    const [before, setBefore] = useState({})
    const [middle, setMiddle] = useState({})
    const [after, setAfter] = useState({})

    const handleChange = (e) => {
        setChecked(e.target.checked)
    }

    // useEffect(() => {
    //     setBefore(document.querySelector('.before'))
    //     setMiddle(document.querySelector('.middle'))
    //     setAfter(document.querySelector('.after'))
    // }, [])

    useEffect(() => {

        const before = {
            span: document.querySelector('.before'),
            down: [
                { transform: 'rotate(0)  translateX(0) translateY(0)' },
                { transform: 'rotate(-45deg) translateX(-8px) translateY(7px)' }
            ],
            up: [
                { transform: 'rotate(-45deg) translateX(-8px) translateY(7px)' },
                { transform: 'rotate(0)  translateX(0) translateY(0)' }
            ]
        }
        const middle = {
            span: document.querySelector('.middle'),
            hide: [
                { opacity: '1' },
                { opacity: '0' }
            ],
            show: [
                { opacity: '0' },
                { opacity: '1' }
            ]
        }
        const after = {
            span: document.querySelector('.after'),
            up: [
                { transform: 'rotate(0)  translateX(0) translateY(0)' },
                { transform: 'rotate(45deg) translateX(-8px) translateY(-7px)' }
            ],
            down: [
                { transform: 'rotate(45deg) translateX(-8px) translateY(-7px)' },
                { transform: 'rotate(0)  translateX(0) translateY(0)' }
            ]
        }

        const params = {
            duration: 200,
            fill: 'forwards',
            easing: 'ease'
        }




        if (checked) {
            before.span.animate(before.down, params)
            middle.span.animate(middle.hide, params)
            after.span.animate(after.up, params)
        }
        if (!checked) {
            before.span.animate(before.up, params)
            middle.span.animate(middle.show, params)
            after.span.animate(after.down, params)
        }



    }, [checked])

    return (
        <header>
            <h1 className="logo">Acme</h1>
            <input type="checkbox" id="mobile-nav" onChange={handleChange} />
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <label htmlFor="mobile-nav" className="mobile-nav-label">
                <span className="before"></span>
                <span className="middle"></span>
                <span className="after"></span>
            </label>
        </header>

    )
}

export default Header
