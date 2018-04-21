import config from './config'
import { Users, Product } from './models'

const main = () => {
  console.log(config.name)
  new Users
  new Product
}

main()

setInterval(main, 5000)
