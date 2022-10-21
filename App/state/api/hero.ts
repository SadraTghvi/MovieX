import axios from 'axios'

import { atom } from 'jotai'
import { HeroImgs } from 'state/atom/locale'

const HeroImgList = atom(
    get => get(HeroImgs),
    async (_, set) => {
        const { data } = await axios.get('http://localhost:7000/api/herophoto/')
        set(HeroImgList, data.url)
    }
)

export { HeroImgList }
