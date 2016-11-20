/**
 * the main display window
 * Author: rapidhere@gmail.com
 */
'use strict';
import config from '../../config';
import ViewBasedWindow from './ViewBasedWindow';


export default class MainWindow extends ViewBasedWindow {
  private conf;

  constructor() {
    super({
      width: config.view.mainWindow.width,
      height: config.view.mainWindow.height,
      show: false
    });

    this.conf = config.view.mainWindow;

    // open debug tools on debug
    if(config.debug.on) {
      this.webContents.openDevTools();
    }

    this.on('ready-to-show', () => {
      this.show();
    });
  }

  // view name
  get viewName() {
    return config.view.mainWindow.viewName;
  }
}