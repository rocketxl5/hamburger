export default function animateMenu(e, checkbox) {


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



    const handleAnimation = (e) => {
        if (checkbox.checked) {
            before.span.animate(before.down, params)
            middle.span.animate(middle.hide, params)
            after.span.animate(after.up, params)
        }
        if (!checkbox.checked) {
            before.span.animate(before.up, params)
            middle.span.animate(middle.show, params)
            after.span.animate(after.down, params)
        }

        return () => {
            e.target.removeEventListener('click', handleAnimation)
        }
    }
    e.target.addEventListener('click', handleAnimation)
}

