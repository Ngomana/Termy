import type { Node } from 'slate'

export type ThemeMode = '#fff' | '#000'

export type CellType = {
  id: string
  value: Node[]
  currentDir: string
  type: OutputType
  status?: Status // undefined is default (before running anything)

  // position?: number[] // todo: (row, col maybe?)
}

export type CellTypeWithFocused = CellType & { focused: boolean }

export type Suggestion = {
  score: number
  command: string
  display: string
  suggestionType: 'dir' | 'historyExternal'
  date?: string
}

// not using these rn
export type FileEntry = {
  fileName: string
  path: string
  isDir: boolean
  isFile: boolean
}

export type CurrentDirStat = FileEntry & {
  gitBranch?: string
}

export type ViewType = 'img' | 'dir' | 'text' | 'else'

export type ViewCommand = {
  viewType: ViewType
  path: string
  content: string
} | null

export * from './shared'