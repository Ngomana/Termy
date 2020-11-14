import type { ThemeMode } from '../../types'
import { darkTheme, lightTheme } from './../stitches.config'

export const formatCurrentDir = (currentDir: string) => {
  const path = currentDir.split('/')
  if (path.length < 3) {
    return currentDir
  }
  const relativePath = currentDir.split('/').slice(3).join('/')
  return (relativePath.length > 0 ? '~/' : '~') + relativePath
}

export const scrollIntoView = (id: string | any) => {
  if (typeof id == 'string') {
    const el = document.getElementById(id)
    if (!el) {
      console.warn("couldn't find element with id", id)
      return
    }
    // okay to use this, since we literally ship our own browser which supports this feature
    // @ts-ignore
    el.scrollIntoViewIfNeeded(false) // `false` means do not center
  }
}

// todo: replace below ones w/ api
export const readFile = (path: string): string | null => {
  return null
}

export const writeFile = (path: string, content: string) => {}

export const getLanguage = (path: string): string | undefined => {
  return undefined
}

export const isDev = import.meta.env.SNOWPACK_PUBLIC_NODE_ENV === 'development'

export const getTheme = (mode?: ThemeMode) =>
  mode === '#000' ? darkTheme : lightTheme

export * from './ipc'
export * from './listener'
export * from './xterm'