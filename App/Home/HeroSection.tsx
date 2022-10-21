import React, { useEffect } from 'react'

import { useAtom } from 'jotai'

import { HeroImgList } from '../state'

const HeroSection = () => {
    // const [HeroImg, setHeroImg] = useState<string>('')
    const [HeroImg, UpdateHeroImg] = useAtom(HeroImgList)

    useEffect(() => {
        UpdateHeroImg()
    }, [])

    useEffect(() => {
        console.log(HeroImg)
    }, [HeroImg])

    return (
        <section className='hero-section'>
            <div
                className='hero-bg'
                style={{ backgroundImage: `url(${HeroImg.prevImg})` }}
            ></div>
            <div className='hero-titles'>
                <div className='titles-wrapper'>
                    <div className='title_hero brand'>
                        {'Share With.'.split(' ').map((word, index) => (
                            <span
                                key={index}
                                className='hero-word'
                                style={{
                                    animationDelay: `${200 * index}ms`,
                                }}
                            >
                                {word}{' '}
                            </span>
                        ))}
                    </div>
                    <div className='title'>
                        {'Share Your Purest Moments With Others'
                            .split(' ')
                            .map((word, index) => (
                                <span
                                    key={index}
                                    className='hero-word'
                                    style={{
                                        animationDelay: `${
                                            200 * index + 450
                                        }ms`,
                                    }}
                                >
                                    {word}{' '}
                                </span>
                            ))}
                    </div>
                    <div className='title_small'>
                        {'Sign Up Now And Explore'
                            .split(' ')
                            .map((word, index) => (
                                <span
                                    key={index}
                                    className='hero-word'
                                    style={{
                                        animationDelay: `${
                                            200 * index + 2000
                                        }ms`,
                                    }}
                                >
                                    {word}{' '}
                                </span>
                            ))}
                    </div>
                </div>
                <div className='cta-wrapper'>
                    <button
                        className='main-cta'
                        style={{ animationDelay: '3.5s' }}
                    >
                        Sign Up
                    </button>
                    <button
                        className='other-cta'
                        style={{ animationDelay: '3.75s' }}
                    >
                        {' '}
                        Explore
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
