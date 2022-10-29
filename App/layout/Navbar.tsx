import React, { useState } from 'react'

import { C } from '@00-team/utils'

import './style/navbar.scss'

const Navbar = () => {
    const [IsActive, setIsActive] = useState(false)
    return (
        <nav className={`navbar-container ${C(IsActive)}`}>
            <div
                className='toggle-nav'
                onClick={() => setIsActive(!IsActive)}
            ></div>
        </nav>
    )
}

export { Navbar }
