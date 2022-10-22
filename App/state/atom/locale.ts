import axios from 'axios'

import { atom } from 'jotai'

import { HeroImg } from '../models/Locale'

const HeroImgs = atom<HeroImg>([])

const HeroImgAtom = atom(
    get => get(HeroImgs),
    async (_, set) => {
        let { data } = await axios.get('http://localhost:7000/api/herophoto/')

        set(HeroImgs, data.urls)
    }
)

export { HeroImgAtom }
