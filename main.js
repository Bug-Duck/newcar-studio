const { app, BrowserWindow, Menu } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('./build/index.html');
  const topMenus = Menu.buildFromTemplate([
    {
      label: "File",
      submenu: [
        {
          label: "New",
          click: () => {}
        }
      ]
    }
  ]);
  Menu.setApplicationMenu(topMenus);
}

app.whenReady().then(() => {
  createWindow()
})