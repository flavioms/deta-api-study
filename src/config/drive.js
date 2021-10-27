const { Deta } = require("deta");

class Drive {
  constructor() {
    this.init();
  }

  init() {
    const deta = Deta(process.env.DATABASE_KEY);
    const drive = deta.Drive(process.env.DRIVE_NAME);
    return drive;
  }
}
module.exports = new Drive().init();
