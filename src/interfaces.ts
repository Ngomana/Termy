export interface Command {
  id: string
  input: string
  currentDir: string
}

// default: send event to backend & listen for stdout
// custom: handled in frontend (for example `go`)
export type CommandType = 'default' | 'custom'

export interface FileEntry {
  fileName: string
  path: string
  isDir: boolean
  isFile: boolean
}

export interface CurrentDirStat extends FileEntry {
  gitBranch?: string
}

export type ViewType = 'img' | 'dir' | 'text' | 'else'

export type ViewCommand = {
  viewType: ViewType
  path: string
  content: string
} | null
