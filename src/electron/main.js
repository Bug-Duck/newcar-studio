const { app, BrowserWindow } = require("electron");

class mainWindow extends BrowserWindow {
  constructor() {
    super({
      show: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
      minHeight: 400,
      minWidth: 600
    });
  }
}

app.whenReady().then(() => {
  const mainWin = new mainWindow();
  // const newFileWin = new newFileWindow();

  mainWin.maximize();
  mainWin.show();
  mainWin.loadFile("src/index.html");

  require("./menu.js");
});
