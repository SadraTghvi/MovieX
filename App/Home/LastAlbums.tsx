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
            <header className={`albums-title title_hero `}>
                <span>Our Latest Albums</span>
            </header>
            <AlbumsWrapper LastAlbums={LastAlbums} />
        </section>
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
        body && body.addEventListener('wheel', UpdateTransform)
    }, [])

    let LastAlbumsClone = [...LastAlbums]

    const ReturnCardData = () => {
        let RandomAlbum =
            LastAlbumsClone[Math.floor(Math.random() * LastAlbumsClone.length)]

        if (Transform === 0) return {}

        if (Transform < 800 && Transform >= 600) {
            LastAlbumsClone.splice(LastAlbumsClone.indexOf(RandomAlbum!), 1)
            console.log('first')
            return RandomAlbum
        } else if (Transform < 600 && Transform >= 400) {
            console.log('sec')
            LastAlbumsClone.splice(LastAlbumsClone.indexOf(RandomAlbum!), 1)
            return RandomAlbum
        } else if (Transform < 400) {
            console.log('third')
            LastAlbumsClone.splice(LastAlbumsClone.indexOf(RandomAlbum!), 1)
            return RandomAlbum
        }
        return {}
    }

    const ReturnCardTransform = (scrollTop: number): number => {
        console.log(scrollTop)
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
                        {...ReturnCardData()}
                    />
                )
            })}
        </div>
    )
}

interface AlbumCardProps {
    title?: string
    description?: string
    img?: string
    transform?: number
    scrollTop?: number
}

const AlbumCard: FC<AlbumCardProps> = ({
    title,
    description,
    img,
    transform,
}) => {
    return (
        <div
            className='album-card-wrapper '
            style={{
                transform: `translateY(${transform}px)`,
            }}
        >
            <img
                className={`card-img ${C(img)}`}
                src={img || 'https://picsum.photos/400/500'}
                alt=''
                loading='lazy'
            />
            <div className='content-wrapper'>
                <div className='card-title title'>{title}</div>
                <div className='card-description titles_small'>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default LastAlbums
