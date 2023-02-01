const { BrowserWindow } = require("electron")

class newfileWindow extends BrowserWindow {
  constructor() {
    super({
      show: false,
      maxHeight: 400,
      maxWidth: 300,
      minHeight: 400,
      minWidth: 300,
      webPreferences: {
        nodeIntegration: true,
      }
    })
  }
}

const newfileWin = new newfileWindow();
newfileWin.loadFile("src/newfilepage.html")

exports.newfileWin = newfileWin;
