'use strict';

module.exports = {
  client: {
    source: ['client/**/*.{html,css,ico}', '!**/app/**'],
    destination: 'dist/client'
  },
  libraries: {
    source: ['client/Libraries/**'],
    destination: 'dist/client/Libraries'
  },
  mocks: {
    source: ['client/mocks/*.{js,json}'],
    destination: 'dist/client/mocks'
  },
  server: {
    source: ['server/**/*.{js,json}', '!server/**/*.spec.*'],
    destination: 'dist/server'
  },
  general: {
    source: ['dist/client/boot.js', 'dist/client/**', 'dist/client/**/**'],
    destination: 'dist/server'
  },
  liveReload: {
    port: 35729
  },
  build: {
    destination: 'dist'
  }
};
