import React from 'react'

import axios from 'axios'

const HeroSection = () => {
    axios
        .get('http://localhost:7000/api/herophoto/', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
        })
        .then(res => console.log(res.data))
        .catch(res => console.log(res))
    return <section className='hero-section'>HeroSection</section>
}

export default HeroSection
