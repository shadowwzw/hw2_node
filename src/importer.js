import { readFile, readFileSync } from 'fs'

export default class Importer {
    import(path) {
        return new Promise((resolve, reject) => {
            readFile(path, (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        })
    }
    importSync(path) {
        return readFileSync(path)
    }
}