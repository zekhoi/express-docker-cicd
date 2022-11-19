const logger = require("../utils/logger");

class ExampleController {
  findAll = async (req, res) => {
    try {
      res.json({ message: "findAll" });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  find = async (req, res) => {
    try {
      res.json({ message: "find" });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  create = async (req, res) => {
    try {
      res.json({ message: "create" });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  update = async (req, res) => {
    try {
      res.json({ message: "update" });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  delete = async (req, res) => {
    try {
      res.json({ message: "delete" });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}

module.exports = new ExampleController();
