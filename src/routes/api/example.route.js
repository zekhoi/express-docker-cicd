const express = require("express");
const ExampleController = require("../../controllers/example.controller");

const router = express.Router();

router.get("/", ExampleController.findAll);
router.get("/:id", ExampleController.find);
router.post("/", ExampleController.create);
router.put("/:id", ExampleController.update);
router.delete("/:id", ExampleController.delete);

module.exports = router;
