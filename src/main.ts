/**
 * The main entry
 * Author: rapidhere@gmail.com
 */
'use strict';
import electron = require('electron');

const app = electron.app;

let mainWindow : Electron.BrowserWindow;

function createWindow() {
  mainWindow = new electron.BrowserWindow({
      width: 800,
      height: 600});

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if(mainWindow == null) {
    createWindow();
  }
});