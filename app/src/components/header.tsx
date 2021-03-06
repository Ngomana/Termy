import React from 'react'
import { Div } from './shared'

export const headerHeight = '29px'

const Header: React.FC = () => {
  return (
    <Div
      className="header"
      css={{
        height: headerHeight,
        width: '100%',
      }}
    />
  )
}

export default Header
