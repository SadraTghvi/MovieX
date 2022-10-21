import React, { useEffect, useState } from 'react'

import axios from 'axios'

const HeroSection = () => {
    const [HeroImg, setHeroImg] = useState<string>('')

    useEffect(() => {
        axios
            .get('http://localhost:7000/api/herophoto/', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
            })
            .then(res => setHeroImg(res.data.url))
            .catch(res => console.log(res))
    }, [])

    return (
        <section className='hero-section'>
            <div
                className='hero-bg'
                style={{ backgroundImage: `url(${HeroImg})` }}
            ></div>
            <div className='hero-titles'>
                <div className='title_hero'>Share With</div>
                <div className='title_small'>
                    Share Your Purest Moments With Others
                </div>
                <div className='title_smaller'>Sign Up Now And Explore</div>
            </div>
        </section>
    )
}

export default HeroSection
