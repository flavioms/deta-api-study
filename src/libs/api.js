const api = require("../api");

module.exports = (app) => {
  api.forEach((router) => app.use("/", require(`../api/${router}`)));
};
