import React, { FC, useEffect, useRef, useState } from 'react'

import { C } from '@00-team/utils'

// const SAMPLE_LAST_ALBUMS = [
//     {
//         title: 'lorem ipsum',
//         description: 'lorem ipsum the sdadw dsadw sda pusdad',
//         img: 'https://picsum.photos/1920/1080',
//     },
//     {
//         title: 'lorem ipsum',
//         description: 'lorem ipsum the sdadw dsadw sda pusdad',
//         img: 'https://picsum.photos/1920/1080',
//     },
//     {
//         title: 'lorem ipsum',
//         description: 'lorem ipsum the sdadw dsadw sda pusdad',
//         img: 'https://picsum.photos/1920/1080',
//     },
//     {
//         title: 'lorem ipsum',
//         description: 'lorem ipsum the sdadw dsadw sda pusdad',
//         img: 'https://picsum.photos/1920/1080',
//     },
//     {
//         title: 'lorem ipsum',
//         description: 'lorem ipsum the sdadw dsadw sda pusdad',
//         img: 'https://picsum.photos/1920/1080',
//     },
//     {
//         title: 'lorem ipsum',
//         description: 'lorem ipsum the sdadw dsadw sda pusdad',
//         img: 'https://picsum.photos/1920/1080',
//     },
//     {
//         title: 'lorem ipsum',
//         description: 'lorem ipsum the sdadw dsadw sda pusdad',
//         img: 'https://picsum.photos/1920/1080',
//     },
//     {
//         title: 'lorem ipsum',
//         description: 'lorem ipsum the sdadw dsadw sda pusdad',
//         img: 'https://picsum.photos/1920/1080',
//     },
//     {
//         title: 'lorem ipsum',
//         description: 'lorem ipsum the sdadw dsadw sda pusdad',
//         img: 'https://picsum.photos/1920/1080',
//     },
// ]

const LastAlbums: FC = () => {
    const container = useRef<HTMLDivElement>(null)
    const [Transform, setTransform] = useState(0)

    const UpdateTransform = () => {
        if (!container.current) return
        const { top } = container.current.getBoundingClientRect()

        setTransform(Math.max(top, 0))
    }

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

    return (
        <section ref={container} className='last-albums'>
            <div className={`albums-title title ${C(Transform <= 600)}`}>
                <span>Our Latest Albums</span>
            </div>
            <div className='albums-wrapper'>
                <AlbumCard
                    title='lorem ipsum'
                    description='lorem ipsum the sdadw dsadw sda pusdad'
                    transform={ReturnCardTransform(Transform)}
                />
                <AlbumCard
                    title='lorem ipsum'
                    description='lorem ipsum the sdadw dsadw sda pusdad'
                    transform={ReturnCardTransform(Transform)}
                />
                <AlbumCard
                    title='lorem ipsum'
                    description='lorem ipsum the sdadw dsadw sda pusdad'
                    transform={ReturnCardTransform(Transform)}
                />
            </div>
        </section>
    )
}

interface AlbumCardProps {
    title: string
    description: string
    transform?: number
}

const AlbumCard: FC<AlbumCardProps> = ({ title, description, transform }) => {
    return (
        <div
            className='album-card-wrapper'
            style={{ transform: `translateY(${transform}px)` }}
        >
            <img src='https://picsum.photos/400/500' alt='' />
            <div className='content-wrapper'>
                <div className='card-title title_small'>{title}</div>
                <div className='card-description titles_smaller'>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default LastAlbums
