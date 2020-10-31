export type CellType = {
  id: string
  input: string
  currentDir: string
  position?: number[] // todo: (row, col maybe?)
}

export type FrontendMessage =
  | { type: 'api'; command: string } // todo: { command: string; args: any[] }  (sending large amounts of text feels awkward)
  | {
      type: 'get-suggestions'
      data: { input: string; currentDir: string }
    }
  | {
      type: 'run-cell'
      data: { id: string; input: string; currentDir: string }
    }
  | { type: 'send-stdin'; data: { id: string; key: string } }

export type ServerStatusMessage = {
  id: string
  type: 'PTY' | 'API'
  status: number
}

export type ServerDataMessage = {
  id: string
  data: string
  cd?: string
}

export type ServerChannelType = 'status' | 'data'

export type Suggestion = {
  raw: string
}

// not sure
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
