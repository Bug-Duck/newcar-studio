const { app, BrowserWindow, Menu } = require("electron");
// const ChildBrowserWindow = require("@electron/remote");

class mainWindow extends BrowserWindow {
  constructor() {
    super({
      show: false,
      webPreferences: {
        nodeIntegration: true,
      },
    });
  }
}

// class newFileWindow extends ChildBrowserWindow {
//   constructor() {
//     super({
//       width: 800,
//       height: 600,
//     });
//   }
// }

app.whenReady().then(() => {
  const mainWin = new mainWindow();
  // const newFileWin = new newFileWindow();

  mainWin.maximize();
  mainWin.show();
  mainWin.loadFile("src/index.html");
  const topMenus = Menu.buildFromTemplate([
    {
      label: "File",
      submenu: [
        {
          label: "New Project",
          onclick: () => {},
        },
      ],
    },
  ]);
  Menu.setApplicationMenu(topMenus);
});
