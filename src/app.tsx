import React, { useEffect, useMemo } from 'react'
import Header from './components/header'
import Terminal from './components/terminal'
import { css } from './stitches.config'
import useStore from './store'

export const globalStyles = css.global({
  body: {
    color: '$primaryTextColor',
    backgroundColor: '$backgroundColor',
    caretColor: '$caretColor',
    fontFamily: '$sans',
    overflowY: 'hidden',

    '*': {
      '::selection': {
        backgroundColor: '$selectionColor',
      },
    },
  },
})

const App: React.FC = () => {
  useMemo(() => globalStyles(), [])
  const theme = useStore(state => state.theme)
  const themeClass = useMemo(() => css.theme(theme), [theme])

  useEffect(() => {
    document.body.className = themeClass
  }, [themeClass])

  return (
    <>
      <Header />
      <Terminal />
    </>
  )
}

export default App
