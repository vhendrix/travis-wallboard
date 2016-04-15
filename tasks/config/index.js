'use strict';

module.exports = {
  client: {
    source: ['client/**/*.{html,css,ico,png}', '!**/app/**', 'client/wallboard.js'],
    destination: 'dist/client'
  },
  libraries: {
    source: ['client/Libraries/**'],
    destination: 'dist/client/Libraries'
  },
  server: {
    source: ['server/**/*.{js,json}', '!server/**/*.spec.*'],
    destination: 'dist/server'
  },
  general: {
    source: ['dist/client/boot.js', 'dist/client/**', 'dist/client/**/**'],
    destination: ''
  },
  liveReload: {
    port: 35729
  },
  build: {
    destination: 'dist'
  }
};
