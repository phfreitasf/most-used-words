import {
    ipcMain
} from 'electron'

const prepareData = require('./prepareData')
const pathsToRows = require('./pathsToRows')
const groupedWords = require('./groupWords')


ipcMain.on('process:Subtitle', (event, paths) => {
    // console.log(paths)
    pathsToRows(paths)
                .then(rows => prepareData(rows))
                .then(words => groupedWords(words))
                .then(groupedWords => event.reply('process:Subtitle', groupedWords))
})