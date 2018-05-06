import DirWatcher from './dirwatcher'
import Importer from './importer'

const dirWatcher = new DirWatcher()
const importer = new Importer()

dirWatcher.watch('./data/', 1000)

dirWatcher.on('changed', async file => {
    const fileContent = await importer.import(file)
    console.log(`fileContent ${file} = ${fileContent}`)
})