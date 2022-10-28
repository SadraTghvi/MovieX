import React, { useEffect } from 'react'

import { useSetAtom } from 'jotai'
import { HeroImgAtom } from 'state'

import AllAlbums from './AllAlbums'
import HeroSection from './HeroSection'
import LastAlbums from './LastAlbums'

import './style/home.scss'

const Home = () => {
    const UpdateHeroImg = useSetAtom(HeroImgAtom)

    useEffect(() => {
        UpdateHeroImg()
    }, [])

    return (
        <main className='home-container'>
            <HeroSection />
            <LastAlbums />
            <AllAlbums />
        </main>
    )
}

export default Home
