module.exports = (app) => {
  const residents = require("./residents");
  const collections = require("./collections");

  app.use("/residents", residents);
  app.use("/collections", collections);
};
