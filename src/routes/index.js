const express = require("express");
const webRouter = require("./web");
const apiRouter = require("./api");

const router = express.Router();

const notFound = (req, res) => {
  res.status(404).json({ message: "Not found" });
};

router.use(webRouter);
router.use("/api", apiRouter);

router.use(notFound);

module.exports = router;
