import { app, BrowserWindow, ipcMain, screen} from 'electron';
import * as request from "request";
import * as fs from "fs";
import sql = require("sql.js");

const db = new sql.Database();

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

//const character = fs.readFileSync("migrations/characters.sql", "utf8");
/*
let tables;
try {
  tables = db.exec("SELECT * FROM hello");
} catch (e) {
  tables = "Table does not exist"
}
console.log(tables);
*/

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

let win;
function createWindow () {

  // Create the browser window.
  const {width, height} = screen.getPrimaryDisplay().workAreaSize;

  let win = new BrowserWindow({ 
    width: (width / 2), 
    height: (height / 2 + 100),
    nodeIntegration: false,
    frame: false,
    preload: 'src/app.js'
  } as any);


  ipcMain.on('reset-window-size', (event, arg)=> {
    win.setSize(width / 2, height / 2 + 100)
  })
  
  // and load the index.html of the app.
  win.loadFile('src/index.html')

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

/*
ipcMain.on('save-character', (event, arg) => {
  const characterStats = JSON.parse(arg as string);
  console.log(characterStats);
  event.sender.send('character-saved', "Character was saved");
});*/


// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
