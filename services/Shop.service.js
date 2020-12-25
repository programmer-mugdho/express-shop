const Shop = require("../models/Shop.model");

module.exports.create = (shopData) => {
  return Shop.create(shopData);
};
