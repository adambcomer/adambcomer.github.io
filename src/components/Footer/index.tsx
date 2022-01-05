import React from 'react'
import FooterEN from './index.en'
import FooterZH_CN from './index.zh-cn'

import './footer.css'

interface FooterProps {
    lang?: 'en' | 'zh-cn'
}

const Footer = ({ lang = 'en' }: FooterProps) => {

    if (lang == 'zh-cn') {
        return (<FooterZH_CN />)
    }

    return (<FooterEN />)
}

export default Footer