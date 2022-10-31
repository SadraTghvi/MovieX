import React, { useEffect } from 'react'

import { C } from '@00-team/utils'

import { useAtomValue, useSetAtom } from 'jotai'
import { HeroImgAtom, NavActiveAtom } from 'state'

import AllAlbums from './AllAlbums'
import HeroSection from './HeroSection'
import LastAlbums from './LastAlbums'

import './style/home.scss'

const Home = () => {
    const UpdateHeroImg = useSetAtom(HeroImgAtom)
    const NavActive = useAtomValue(NavActiveAtom)

    useEffect(() => {
        UpdateHeroImg()
    }, [])

    return (
        <main className={`home-container ${C(NavActive)}`}>
            <HeroSection />
            <LastAlbums />
            <AllAlbums />
        </main>
    )
}

export default Home
