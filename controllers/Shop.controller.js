const shopService = require("../services/Shop.service");

module.exports.create = async (req, res) => {
  try {
    const shop = await shopService.create(req.body);
    return res.status(200).json(shop);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.delete = async (req, res) => {
  try {
    const shop = await shopService.delete(req.body);
    return res.status(200).json(shop);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.findAll = async (req, res) => {
  try {
    const data = await shopService.findAll();
    return res.status(200).json(data);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.find = async (req, res) => {
  try {
    const data = await shopService.find(req.params.id);
    return res.status(200).json(data);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.update = async (req, res) => {
  try {
    const data = await shopService.update(req.params.id, req.body);
    return res.status(200).json(data);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
