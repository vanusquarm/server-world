//An index table for all models
//As a good practice, all modules must import models from the models.js


import Item from './item.js'
import Store from './store.js'
import Cart from './cart.js'

const models = {
  Item,
  Store,
  Cart
}

export default models;
