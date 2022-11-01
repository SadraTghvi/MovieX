import React from 'react'

import { C } from '@00-team/utils'

import { RiMenu4Line } from '@react-icons/all-files/ri/RiMenu4Line'
import { VscClose } from '@react-icons/all-files/vsc/VscClose'

import { useAtom } from 'jotai'
import { NavActiveAtom } from 'state'

import './style/navbar.scss'

const Navbar = () => {
    const [IsActive, setIsActive] = useAtom(NavActiveAtom)

    return (
        <>
            <div className='toggle-nav' onClick={() => setIsActive(!IsActive)}>
                <div className={`toggle-icon ${C(IsActive)}`}>
                    {!IsActive ? (
                        <RiMenu4Line size={40} />
                    ) : (
                        <VscClose size={50} />
                    )}
                </div>
            </div>
            <nav className={`navbar-container ${C(IsActive)}`}></nav>
        </>
    )
}

export { Navbar }
