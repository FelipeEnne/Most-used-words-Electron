const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')
const prepereData = require('./prepereData')
const groupWords = require('./groupWords')

ipcMain.on('process-subtitles', (event, paths) => {

    pathsToRows(paths)
        .then(rows => prepereData(rows))
        .then(words => groupWords(words))
        .then(grupedWords => event.reply('process-subtitles', grupedWords))

})