import React, { FC } from 'react'
import FooterEN from './index.en'
import FooterZHCN from './index.zh-cn'

import './footer.css'

interface FooterProps {
  lang?: 'en' | 'zh-cn'
}

const Footer: FC<FooterProps> = ({ lang = 'en' }) => {
  if (lang === 'zh-cn') {
    return (<FooterZHCN />)
  }

  return (<FooterEN />)
}

export default Footer
