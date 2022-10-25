import React, { useEffect } from 'react'

import { useSetAtom } from 'jotai'
import { HeroImgAtom } from 'state'

import HeroSection from './HeroSection'
import LastAlbums from './LastAlbums'

import './style/home.scss'
import './style/homehero.scss'
import './style/lastalbums.scss'

const Home = () => {
    const UpdateHeroImg = useSetAtom(HeroImgAtom)

    useEffect(() => {
        UpdateHeroImg()
    }, [])

    return (
        <main className='home-container'>
            <HeroSection />
            <LastAlbums />
        </main>
    )
}

export default Home
