import React, { useEffect } from 'react'

import { useSetAtom } from 'jotai'
import { HeroImgAtom } from 'state'

import HeroSection from './HeroSection'

import './style/home.scss'

const Home = () => {
    const UpdateHeroImg = useSetAtom(HeroImgAtom)

    useEffect(() => {
        UpdateHeroImg()
    }, [])

    return (
        <main className='home-container'>
            <HeroSection />
        </main>
    )
}

export default Home
