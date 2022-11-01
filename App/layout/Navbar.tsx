import React, { FC } from 'react'

import { C } from '@00-team/utils'

import { RiMenu4Line } from '@react-icons/all-files/ri/RiMenu4Line'
import { VscClose } from '@react-icons/all-files/vsc/VscClose'

import { Link } from 'react-router-dom'

import { useAtom } from 'jotai'
import { NavActiveAtom } from 'state'

import './style/navbar.scss'

const SAMPLE_NAV_PAGES = [
    {
        img: 'https://picsum.photos/1920/1080',
        link: '/',
        title: 'Home',
    },
    {
        img: 'https://picsum.photos/1920/1080',
        link: '/gallery',
        title: 'Gallery',
    },
    {
        img: 'https://picsum.photos/1920/1080',
        link: '/about',
        title: 'About Us',
    },
    {
        img: 'https://picsum.photos/1920/1080',
        link: '/',
        title: 'Home',
    },
    {
        img: 'https://picsum.photos/1920/1080',
        link: '/gallery',
        title: 'Gallery',
    },
    {
        img: 'https://picsum.photos/1920/1080',
        link: '/about',
        title: 'About Us',
    },
]

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
                {SAMPLE_NAV_PAGES.map((item, index) => {
                    return (
                        <NavPage
                            {...item}
                            className={C(IsActive)}
                            delay={IsActive ? index * 0.25 : 0}
                        />
                    )
                })}
            </nav>
        </>
    )
}

interface NavPageProps {
    img: string
    title: string
    link: string
    className?: string
    delay?: number
}

const NavPage: FC<NavPageProps> = ({ title, img, link, className, delay }) => {
    return (
        <Link
            style={{
                backgroundImage: `url(${img})`,
                transitionDelay: `${delay}s`,
            }}
            to={link}
            className={`nav-page ${className && className}`}
        >
            <div className='title title_hero'> {title} </div>
        </Link>
    )
}

export { Navbar }
