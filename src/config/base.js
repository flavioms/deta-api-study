const { Deta } = require("deta");

class Database {
  constructor() {
    this.init();
  }

  init() {
    const deta = Deta(process.env.DATABASE_KEY);
    const db = deta.Base(process.env.DATABASE_NAME);
    return db;
  }
}
module.exports = new Database().init();
