import { atom } from 'jotai'

import { HeroImg } from '../models/Locale'

const HeroImgs = atom<HeroImg>({
    prevImg: '',
    nextImg: '',
})

export { HeroImgs }
