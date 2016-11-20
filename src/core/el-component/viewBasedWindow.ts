/**
 * view based window
 * Author: rapidhere@gmail.com
 */
'use strict';
import electron = require('electron');
import config from '../../config';

abstract class ViewBasedWindow extends electron.BrowserWindow {
  constructor(prop: Electron.BrowserWindowOptions) {
    super(prop);

    this.loadURL('file://' + config.view.viewsRoot + '/' + this.viewName + '/index.html');
  }

  // view name of this view based window
  abstract get viewName(): string;
}

export default ViewBasedWindow;