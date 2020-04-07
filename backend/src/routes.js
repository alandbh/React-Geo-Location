const { Router } = require("express");
const devController = require("./controllers/devController");
const searchController = require("./controllers/searchController");

const routes = Router();

routes.get("/devs", devController.index);
routes.post("/devs", devController.store);
routes.get("/search", searchController.index);
routes.delete("/delete", devController.destroy);

module.exports = routes;
