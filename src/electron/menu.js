const { Menu } = require("electron");
const dialog = require("electron").dialog;
const newfileWin = require("./newfile.js").newfileWin;

const topMenus = Menu.buildFromTemplate([
  {
    label: "File",
    submenu: [
      {
        label: "New Project",
        click: () => {
          newfileWin.show();
        }
      },
      {
        label: "Open Project",
        click: (error) => {
          const result = dialog.showOpenDialog({
            title: "Please chooes your animation project",
            filters: [
              {
                name: "Newcar Project",
                extensions: [".rec"],
              },
            ],
          });
        },
      },
    ],
  },
]);
Menu.setApplicationMenu(topMenus);
