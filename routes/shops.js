const express = require("express");
const router = express.Router();
const shopController = require("../controllers/Shop.controller");

router.post("/", shopController.create);

module.exports = router;
