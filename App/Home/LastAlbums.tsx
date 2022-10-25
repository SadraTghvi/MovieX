import React, { useEffect, useRef, useState } from 'react'

import { C } from '@00-team/utils'

const LastAlbums = () => {
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

    useEffect(() => {
        console.log(Transform)
    }, [Transform])

    return (
        <section ref={container} className='last-albums'>
            <div className={`albums-title title ${C(Transform <= 600)}`}>
                <span>Our Latest Albums</span>
            </div>
            <div className='albums-wrapper'></div>
        </section>
    )
}

export default LastAlbums
