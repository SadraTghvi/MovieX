import { resolve } from 'path'

const BASE_DIR = resolve(__dirname, '../../')
const APP_DIR = resolve(BASE_DIR, 'App')
const DIST_DIR = resolve(BASE_DIR, 'ShareWith/static/dist/')

export { BASE_DIR, APP_DIR, DIST_DIR, resolve }
