import React, { FC, useEffect, useRef, useState } from 'react'

import { C } from '@00-team/utils'

import { useAtom } from 'jotai'
import { LastAlbumAtom } from 'state'

const LastAlbums: FC = () => {
    const [LastAlbums, UpdateLastAlbums] = useAtom(LastAlbumAtom)

    const container = useRef<HTMLDivElement>(null)
    const [Transform, setTransform] = useState(0)

    const UpdateTransform = () => {
        if (!container.current) return
        const { top } = container.current.getBoundingClientRect()

        setTransform(Math.max(top, 0))
    }

    useEffect(() => {
        UpdateLastAlbums()
    }, [])

    useEffect(() => {
        UpdateTransform()
        window.addEventListener('scroll', UpdateTransform)
    }, [])

    const ReturnCardTransform = (scrollTop: number): number => {
        if (scrollTop >= 600) return 40
        else if (scrollTop < 600 && scrollTop >= 300) return 30
        else if (scrollTop < 300 && scrollTop >= 100) return 20
        else if (scrollTop < 100) return 10
        else if (scrollTop === 0) return 0
        else return 0
    }

    const ReturnCardData = (CardIndex: number) => {
        if (CardIndex == 1) {
            if (Transform < 500 && Transform >= 300) return LastAlbums[0]
            else if (Transform < 300 && Transform >= 100) return LastAlbums[1]
            else if (Transform < 100) return LastAlbums[2]
        }
        if (CardIndex == 2) {
            if (Transform < 500 && Transform >= 300) return LastAlbums[3]
            else if (Transform < 300 && Transform >= 100) return LastAlbums[4]
            else if (Transform < 100) return LastAlbums[5]
        }
        if (CardIndex == 3) {
            if (Transform < 500 && Transform >= 300) return LastAlbums[6]
            else if (Transform < 300 && Transform >= 100) return LastAlbums[7]
            else if (Transform < 100) return LastAlbums[8]
        }
        if (CardIndex == 4) {
            if (Transform < 500 && Transform >= 300) return LastAlbums[6]
            else if (Transform < 300 && Transform >= 100) return LastAlbums[7]
            else if (Transform < 100) return LastAlbums[8]
        }
        if (CardIndex == 5) {
            if (Transform < 500 && Transform >= 300) return LastAlbums[9]
            else if (Transform < 300 && Transform >= 100) return LastAlbums[10]
            else if (Transform < 100) return LastAlbums[11]
        }
        return {}
    }

    return (
        <section ref={container} className='last-albums'>
            <div className={`albums-title title ${C(Transform <= 600)}`}>
                <span>Our Latest Albums</span>
            </div>
            <div className='albums-wrapper'>
                {Array.from(Array(5).keys()).map((_, index) => {
                    const arr = Array.from(Array(5).keys())
                    const middle = arr[Math.round((arr.length - 1) / 2)]

                    const CardMargin = (index: number): number => {
                        if (middle) {
                            if (index === middle) return 0
                            else if (
                                index + 1 === middle ||
                                index - 1 === middle
                            ) {
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
                                Transform <= 10
                                    ? 0
                                    : ReturnCardTransform(Transform) +
                                      CardMargin(index)
                            }
                            scrollTop={Transform}
                            {...ReturnCardData(index + 1)}
                        />
                    )
                })}
            </div>
        </section>
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
