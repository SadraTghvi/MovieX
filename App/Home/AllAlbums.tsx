import React, { useEffect, useRef, useState } from 'react'

import { C } from '@00-team/utils'

import { useAtom } from 'jotai'
import { AllAlbumsAtom } from 'state'

import './style/allalbums.scss'

const AllAlbums = () => {
    const [AllAlbumsImgs, UpdateAllAlbumsImgs] = useAtom(AllAlbumsAtom)

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

    useEffect(() => {
        UpdateAllAlbumsImgs()
    }, [])

    const albumsColumn: number = innerWidth >= 1024 ? 4 : 2

    let ChangeableAllImgs = [...AllAlbumsImgs]

    // calculate albums row
    const CAR = () => Math.floor(AllAlbumsImgs.length / albumsColumn)

    return (
        <section className='all-albums' ref={container}>
            <header className={`all-albums-title title_hero ${C(Intersected)}`}>
                <span>Explore Our Albums</span>
            </header>
            <div
                className='all-albums-wrapper'
                onClick={() => open('/gallery', '_self')}
            >
                {Array.from(Array(albumsColumn).keys()).map((_, idx01) => {
                    return (
                        <div
                            key={idx01}
                            className='albums-column'
                            style={{
                                width: `${Math.floor(100 / albumsColumn)}%`,
                            }}
                        >
                            {Array.from(Array(CAR()).keys()).map((_, idx02) => {
                                return (
                                    <img
                                        key={idx02}
                                        className='album-column-img'
                                        loading='lazy'
                                        src={
                                            ChangeableAllImgs.sort(
                                                () => Math.random() - 0.5
                                            )[idx02]
                                        }
                                        alt=''
                                    />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default AllAlbums
