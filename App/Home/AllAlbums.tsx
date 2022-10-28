import React, { useEffect, useRef, useState } from 'react'

import { C } from '@00-team/utils'

import './style/allalbums.scss'

const AllAlbums = () => {
    const container = useRef<HTMLDivElement>(null)
    const [Intersected, setIntersected] = useState(false)

    useEffect(() => {
        if (container.current && !Intersected) {
            var observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry && entry.isIntersecting) {
                        setIntersected(true)
                        observer.disconnect()
                    }
                },
                {
                    rootMargin: '-100px',
                }
            )

            observer.observe(container.current)
        }
        return () => {
            if (observer) observer.disconnect()
        }
    }, [container])

    const albumsColumn: number = Math.round(innerWidth / 360)

    return (
        <section className='all-albums' ref={container}>
            <header className={`all-albums-title title_hero ${C(Intersected)}`}>
                <span>Explore Our Albums</span>
            </header>
            <div className='all-albums-wrapper'>
                {Array.from(Array(albumsColumn).keys()).map((_, index) => {
                    return (
                        <div
                            key={index}
                            className='album-column'
                            style={{
                                width: `${Math.floor(100 / albumsColumn)}%`,
                            }}
                        ></div>
                    )
                })}
            </div>
        </section>
    )
}

export default AllAlbums
