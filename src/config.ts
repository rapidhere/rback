/**
 * configurations
 * Author: rapidhere@gmail.com
 */
import path = require('path');

export default {
  //~ view configs
  view: {
    viewsRoot: path.resolve(__dirname, 'views'),

    //~ mainwindow view configs
    mainWindow: {
      viewName: 'main',
      width: 800,
      height: 600
    }
  },

  // debug congis
  debug: {
    on: true
  }
};