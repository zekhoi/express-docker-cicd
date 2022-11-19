const app = require("./app");
const database = require("./database/models");
const logger = require("./utils/logger");
const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    await database.sequelize.sync();
    logger.info(
      "⚡️[database]: Database connection has been established successfully."
    );

    app.listen(PORT, () => {
      logger.info(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error(error);
  }
};

start();
