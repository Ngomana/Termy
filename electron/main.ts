import setupCommunication from './communication'
import { app, BrowserWindow } from 'electron'
import { createWindow } from './window'

let mainWindow: BrowserWindow

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createMainWindow()
  setupCommunication()
  setupDevtools()
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

const createMainWindow = async () => {
  mainWindow = await createWindow()

  app.on('activate', async function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) await createWindow()
  })
}

const setupDevtools = () => {
  try {
    // https://github.com/electron/electron/issues/23662
    // await session.defaultSession.loadExtension(
    //   `/Users/martonlanga/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi`,
    // )
  } catch (error) {
    console.log(error)
  }
}
