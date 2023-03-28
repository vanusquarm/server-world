//An index table for all models
//As a good practice, all modules must import models from the models.js


import Product from './product.js'
import Store from './store.js'
import Cart from './cart.js'

const models = {
  Product,
  Store,
  Cart
}

export default models;
