require('./modules/mongo.js');
const Product = require('./models/Product');
const products = require('./db/products');
const Manufacturer = require('./models/Manufacturer.js');
const manufacturers = require('./db/manufacturers');

const createdb = async (request, response) => {
  await Product.deleteMany({});
  await Manufacturer.deleteMany({});

  await Manufacturer.insertMany(manufacturers);
  console.log('MANUFACTURERS ADDED')

  await Product.insertMany(products);
  console.log('PRODUCTS ADDED')

  console.log('Sacabo')
};

createdb();