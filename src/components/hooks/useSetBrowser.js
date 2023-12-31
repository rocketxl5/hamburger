import { useState, useEffect } from 'react'

const useSetBrowser = () => {
    const [firefox, setFirefox] = useState(false)
    const [crios, setCrios] = useState(false)
    const [target, setTarget] = useState({})

    useEffect(() => {
        const handleSetBrowser = () => {
            const userAgent = window.navigator.userAgent.toLowerCase()

            if (userAgent.includes('firefox')) {
                setFirefox(true)
                setTarget(document.querySelector('header'))
            }
            if (userAgent.includes('chrome')) {
                setCrios(true)
                setTarget(document.querySelector('.mobile-nav-label'))
                // target.classList.remove('mobile-nav-label')
            }
        }
        handleSetBrowser()
        window.addEventListener('load', handleSetBrowser)

        return () => {

            window.removeEventListener('load', handleSetBrowser)
        }
    }, [])

    return { firefox, crios, setTarget, target }
}

export default useSetBrowser