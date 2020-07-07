module.exports = app => {
  const petugas = require("../controllers/petugas.controller");
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", petugas.create);

  // Retrieve all Tutorials
  router.get("/", petugas.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", petugas.findOne);

  // Update a Tutorial with id
  router.put("/:id", petugas.update);

  // Delete a Tutorial with id
  router.delete("/:id", petugas.delete);

  // Create a new Tutorial
  router.delete("/", petugas.deleteAll);

  app.use('/api/petugas', router);
};
