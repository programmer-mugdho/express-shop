const express = require("express");
const router = express.Router();
const shopController = require("../controllers/Shop.controller");
const { isAuthenticated } = require("../controllers/User.controller");

router.post("/", isAuthenticated, shopController.create);
router.delete("/delete", isAuthenticated, shopController.delete);
router.get("/findAll", shopController.findAll);
router.get("/find/:id", shopController.find);
router.put("/update/:id", isAuthenticated, shopController.update);

module.exports = router;
