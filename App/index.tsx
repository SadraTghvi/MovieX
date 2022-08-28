import React from 'react'
import { createRoot } from 'react-dom/client'

const Root = () => {
    return <div>Root</div>
}

createRoot(document.getElementById('root')!).render(<Root />)
