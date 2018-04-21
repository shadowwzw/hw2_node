import config from './config/index'
import { Users, Product } from './models/index'

const app = () => {
  console.log(config.name)
  new Users
  new Product
}

app()

setInterval(app, 5000)
