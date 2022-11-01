import React, { FC, useEffect, useRef, useState } from 'react'

import { C } from '@00-team/utils'

import { useAtom } from 'jotai'
import { LastAlbum, LastAlbumAtom } from 'state'

import './style/lastalbums.scss'

const LastAlbums: FC = () => {
    const [LastAlbums, UpdateLastAlbums] = useAtom(LastAlbumAtom)

    useEffect(() => {
        UpdateLastAlbums()
    }, [])

    return (
        <section className='last-albums'>
            <AboutHeader />
            <AlbumsWrapper LastAlbums={LastAlbums} />
        </section>
    )
}

const AboutHeader = () => {
    const [Intersected, setIntersected] = useState(false)
    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (container.current && !Intersected) {
            var observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry && entry.isIntersecting) {
                        setIntersected(true)
                    } else {
                        if (
                            container.current &&
                            container.current.getBoundingClientRect()
                        ) {
                            if (
                                scrollY >
                                container.current!.getBoundingClientRect().top
                            ) {
                                setIntersected(true)
                            } else {
                                setIntersected(false)
                            }
                        }
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

    return (
        <header
            ref={container}
            className={`albums-title title_hero ${C(Intersected)}`}
        >
            <span>Our Latest Albums</span>
        </header>
    )
}

interface AlbumsWrapperProps {
    LastAlbums: LastAlbum[]
}

const AlbumsWrapper: FC<AlbumsWrapperProps> = ({ LastAlbums }) => {
    const [Transform, setTransform] = useState(0)

    const container = useRef<HTMLDivElement>(null)

    const UpdateTransform = () => {
        if (!container.current) return
        const { top } = container.current.getBoundingClientRect()

        setTransform(Math.max(top, 0))
    }

    useEffect(() => {
        UpdateTransform()

        const body = document.getElementsByClassName('home-container')[0]
        body && body.addEventListener('scroll', UpdateTransform)
    }, [])

    const ReturnCardTransform = (scrollTop: number): number => {
        if (scrollTop >= 900) return 40
        else if (scrollTop < 900 && scrollTop >= 600) return 30
        else if (scrollTop < 600 && scrollTop >= 400) return 20
        else if (scrollTop < 400) return 10
        else if (scrollTop === 0) return 0
        else return 0
    }

    return (
        <div className='albums-wrapper' ref={container}>
            {Array.from(Array(5).keys()).map((_, index) => {
                const arr = Array.from(Array(5).keys())
                const middle = arr[Math.round((arr.length - 1) / 2)]

                const CardMargin = (index: number): number => {
                    if (middle) {
                        if (index === middle) return 0
                        else if (index + 1 === middle || index - 1 === middle) {
                            return 50
                        } else {
                            return 90
                        }
                    }
                    return 0
                }

                return (
                    <AlbumCard
                        key={index}
                        transform={
                            Transform <= 300
                                ? 0
                                : ReturnCardTransform(Transform) +
                                  CardMargin(index)
                        }
                        scrollTop={Transform}
                        LastAlbums={LastAlbums}
                    />
                )
            })}
        </div>
    )
}

interface AlbumCardProps {
    img?: string
    transform?: number
    scrollTop?: number
    LastAlbums: LastAlbum[]
}

const AlbumCard: FC<AlbumCardProps> = ({ transform, LastAlbums }) => {
    const [ActiveAlbum, setActiveAlbum] = useState<LastAlbum>({
        title: 'string',
        img: 'string',
        description: 'string',
    })

    useEffect(() => {
        let LastAlbumsClone = [...LastAlbums]

        const ChangeAlbum = setInterval(() => {
            const RandomAlbum =
                LastAlbumsClone[
                    Math.floor(Math.random() * LastAlbumsClone.length)
                ]

            setActiveAlbum(RandomAlbum!)
        }, 5000)

        return () => clearInterval(ChangeAlbum)
    }, [LastAlbums])

    return (
        <div
            className='album-card-wrapper '
            style={{
                transform: `translateY(${transform}px)`,
            }}
        >
            <img
                className={`card-img ${C(ActiveAlbum.img)}`}
                src={ActiveAlbum.img || 'https://picsum.photos/400/500'}
                alt=''
                loading='lazy'
            />
            <div className='content-wrapper'>
                <div className='card-title title'>{ActiveAlbum.title}</div>
                <div className='card-description titles_small'>
                    {ActiveAlbum.description}
                </div>
            </div>
        </div>
    )
}

export default LastAlbums
