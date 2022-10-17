import React, { FC } from 'react'

import Home from 'Home'
import { Route, Routes } from 'react-router-dom'

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
