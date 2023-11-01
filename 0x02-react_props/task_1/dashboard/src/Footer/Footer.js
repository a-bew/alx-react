import React from 'react'
import { getFooterCopy, getFullYear } from '../utils/utils'

const Footer = () => {
    return (
        <div className='App-footer'>Copyright {getFullYear()} - {getFooterCopy()}</div>
    )
}

export default Footer