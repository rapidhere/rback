/**
 * The application
 * Author: rapidhere@gmail.com
 */
'use strict';
import electron = require('electron');
import config from '../config';
import MainWindow from './el-component/mainWindow';

export default class RbackApplication {
  private app = electron.app;
  private mainWindow: Electron.BrowserWindow;

  constructor() {
  }

  /**
   * start the application
   */
  start() {
    this.app
      .on('ready', this.createWindow)
      .on('window-all-closed', () => {
        this.app.quit();
      })
      .on('activate', () => {
        if(this.mainWindow == null) {
          this.createWindow();
        }
    });
  }

  // create the main browser window
  private createWindow() {
    this.mainWindow = new MainWindow();

    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });
  }
}