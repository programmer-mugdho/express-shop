const Shop = require("../models/Shop.model");

module.exports.create = (shopData) => {
  return Shop.create(shopData);
};

module.exports.delete = (data) => {
  return Shop.deleteOne(data);
};

module.exports.findAll = () => {
  return Shop.find({});
};

module.exports.find = (id) => {
  return Shop.findById(id);
};

module.exports.update = (id, data) => {
  return Shop.findByIdAndUpdate(id, data);
};
