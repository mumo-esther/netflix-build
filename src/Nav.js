import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    const goToProfile = () => {
        navigate('/profile');
    }

    const goToHome = () => {
        navigate('/');
    }

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className='nav_conntets'>
                <img
                onClick={goToHome}
                    className='nav_logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='Netflix Logo' />
                <img
                    onClick={goToProfile}
                    className='nav_avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    alt='Avatar' />
            </div>
        </div>
    )
}

export default Nav