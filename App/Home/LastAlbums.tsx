import React, { FC, useEffect, useRef, useState } from 'react'

import { C } from '@00-team/utils'

const SAMPLE_LAST_ALBUMS: AlbumCardProps[] = [
    {
        title: 'phase one',
        description: 'lorem ipsum the sdadw dsadw sda pusdad',
        img: 'https://picsum.photos/400/5100',
    },
    {
        title: 'phase two',
        description: 'lorem ipsum the sdadw dsadw sda pusdad',
        img: 'https://picsum.photos/400/500',
    },
    {
        title: 'phase three',
        description: 'lorem ipsum the sdadw dsadw sda pusdad',
        img: 'https://picsum.photos/200/300',
    },
    {
        title: 'phase one',
        description: 'lorem ipsum the sdadw dsadw sda pusdad',
        img: 'https://picsum.photos/400/5100',
    },
    {
        title: 'phase two',
        description: 'lorem ipsum the sdadw dsadw sda pusdad',
        img: 'https://picsum.photos/400/500',
    },
    {
        title: 'phase three',
        description: 'lorem ipsum the sdadw dsadw sda pusdad',
        img: 'https://picsum.photos/200/300',
    },
    {
        title: 'phase one',
        description: 'lorem ipsum the sdadw dsadw sda pusdad',
        img: 'https://picsum.photos/400/5100',
    },
    {
        title: 'phase two',
        description: 'lorem ipsum the sdadw dsadw sda pusdad',
        img: 'https://picsum.photos/400/500',
    },
    {
        title: 'phase three',
        description: 'lorem ipsum the sdadw dsadw sda pusdad',
        img: 'https://picsum.photos/200/300',
    },
]

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

    const ReturnCardData = (CardIndex: number) => {
        if (CardIndex == 1) {
            if (Transform < 600 && Transform >= 300)
                return SAMPLE_LAST_ALBUMS[0]
            else if (Transform < 300 && Transform >= 100)
                return SAMPLE_LAST_ALBUMS[1]
            else if (Transform < 100) return SAMPLE_LAST_ALBUMS[2]
        }
        if (CardIndex == 2) {
            if (Transform < 600 && Transform >= 300)
                return SAMPLE_LAST_ALBUMS[3]
            else if (Transform < 300 && Transform >= 100)
                return SAMPLE_LAST_ALBUMS[4]
            else if (Transform < 100) return SAMPLE_LAST_ALBUMS[5]
        }
        if (CardIndex == 3) {
            if (Transform < 600 && Transform >= 300)
                return SAMPLE_LAST_ALBUMS[6]
            else if (Transform < 300 && Transform >= 100)
                return SAMPLE_LAST_ALBUMS[7]
            else if (Transform < 100) return SAMPLE_LAST_ALBUMS[8]
        }
        return {
            title: 'lorem ipsum',
            description: 'lorem ipsum the sdadw dsadw sda pusdad',
            img: 'https://picsum.photos/400/500',
        }
    }

    return (
        <section ref={container} className='last-albums'>
            <div className={`albums-title title ${C(Transform <= 600)}`}>
                <span>Our Latest Albums</span>
            </div>
            <div className='albums-wrapper'>
                <AlbumCard
                    transform={ReturnCardTransform(Transform)}
                    {...ReturnCardData(1)}
                />
                <AlbumCard
                    transform={ReturnCardTransform(Transform)}
                    {...ReturnCardData(2)}
                />
                <AlbumCard
                    transform={ReturnCardTransform(Transform)}
                    {...ReturnCardData(3)}
                />
            </div>
        </section>
    )
}

interface AlbumCardProps {
    title?: string
    description?: string
    img?: string
    transform?: number
}

const AlbumCard: FC<AlbumCardProps> = ({
    title,
    description,
    transform,
    img,
}) => {
    return (
        <div
            className='album-card-wrapper'
            style={{ transform: `translateY(${transform}px)` }}
        >
            <img src={img} alt='' />
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
