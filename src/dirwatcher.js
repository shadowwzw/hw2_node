import { readdir } from 'fs'
import { EventEmitter } from 'events'
import difference from 'lodash/difference'

export default class DirWatcher extends EventEmitter {
    constructor() {
        super()
        this.files = []
    }
    watch(path, delay) {
        setInterval(async () => {
            const files = await new Promise((resolve, reject) => {
                readdir(path, (error, files) => {
                    if (error) reject(error)
                    resolve(files)
                })
            })
            const changedFiles = difference(files, this.files)
            const changedFilesWithRelativePath = changedFiles.map(file => path + file)
            this.files = files
            changedFilesWithRelativePath.forEach(file => {
                this.emit('changed', file)
            });
        }, delay)
    }
}