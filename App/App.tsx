import React, { FC } from 'react'

import loadable from '@loadable/component'
import { Route, Routes } from 'react-router-dom'

const Home = loadable(() => import('Home'))

const App: FC = () => {
    return (
        // <Navbar />
        <MainContent />
        // <Footer />
    )
}

const MainContent: FC = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    )
}

export default App
