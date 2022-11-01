import React, { FC, useEffect, useRef, useState } from 'react'

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
    const [NavTransformX, setNavTransformX] = useState(0)

    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const Navcontainer =
            document.getElementsByClassName('navbar-container')[0]

        Navcontainer?.addEventListener('mousemove', (e: any) => {
            ReturnCardTransform(e)
        })
    }, [])

    const ReturnCardTransform = (e: any) => {
        if (!container.current) return
        const { left } = container.current.getBoundingClientRect()
        const { right } = container.current.getBoundingClientRect()
        right
        left
        // width divide by two
        const wdbyt = Math.floor(innerWidth / 2)

        const mouseX = e.pageX

        if (mouseX > wdbyt) {
            console.log('first')
            setNavTransformX(NavTransformX - 1)
        } else if (mouseX <= wdbyt) {
            console.log('sec')
            setNavTransformX(NavTransformX + 1)
        }
        console.log(container.current.getBoundingClientRect())
    }

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
            <nav
                className={`navbar-container ${C(IsActive)}`}
                style={{ transform: `translateX(${NavTransformX}px)` }}
                ref={container}
            >
                {SAMPLE_NAV_PAGES.map((item, index) => {
                    return (
                        <NavPage
                            key={index}
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
