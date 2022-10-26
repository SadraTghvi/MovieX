import axios from 'axios'

import { atom } from 'jotai'

import { HeroImg, LastAlbum } from '../models/Locale'

const HeroImgs = atom<HeroImg>([])
const LastAlbums = atom<LastAlbum[]>([])

const HeroImgAtom = atom(
    get => get(HeroImgs),
    async (_, set) => {
        let { data } = await axios.get('http://localhost:7000/api/herophoto/')

        set(HeroImgs, data.urls)
    }
)

const LastAlbumAtom = atom(
    get => get(LastAlbums),
    async (_, set) => {
        let { data } = await axios.get('http://localhost:7000/api/last-albums/')

        set(LastAlbums, data.lastAlbums)
    }
)

export { HeroImgAtom, LastAlbumAtom }
