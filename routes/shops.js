const express = require("express");
const router = express.Router();
const shopController = require("../controllers/Shop.controller");

router.post("/", shopController.create);
router.delete("/delete", shopController.delete);
router.get("/findAll", shopController.findAll);
router.get("/find/:id", shopController.find);
router.put("/update/:id", shopController.update);

module.exports = router;
