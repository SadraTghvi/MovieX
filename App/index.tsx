import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'

import App from 'App'
import { BrowserRouter as Router } from 'react-router-dom'

import './style/base.scss'
import './style/fonts/imports.scss'

const Root: FC = () => {
    return (
        <Router>
            <App />
        </Router>
    )
}

createRoot(document.getElementById('root')!).render(<Root />)
