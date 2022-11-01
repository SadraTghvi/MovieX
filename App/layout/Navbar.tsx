import React, { FC } from 'react'

import { C } from '@00-team/utils'

import { RiMenu4Line } from '@react-icons/all-files/ri/RiMenu4Line'
import { VscClose } from '@react-icons/all-files/vsc/VscClose'

import { Link } from 'react-router-dom'

import { useAtom } from 'jotai'
import { NavActiveAtom } from 'state'

import './style/navbar.scss'

const Navbar: FC = () => {
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
            <nav className={`navbar-container ${C(IsActive)}`}>
                <NavPage
                    img='https://picsum.photos/200/300'
                    link='/test'
                    title='title test'
                />
            </nav>
        </>
    )
}

interface NavPageProps {
    img: string
    title: string
    link: string
}

const NavPage: FC<NavPageProps> = ({ title, img, link }) => {
    return (
        <Link
            style={{ backgroundImage: `url(${img})` }}
            to={link}
            className='nav-page'
        >
            <div className='title title_hero'> {title} </div>
        </Link>
    )
}

export { Navbar }
