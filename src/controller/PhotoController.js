const uuid = require("uuid");
const drive = require("../config/drive");

class PhotoController {
  async upload(req, res) {
    try {
      const [, fileType] = req.files.file.name.split(".");
      const fileName = `${uuid.v4()}-${new Date().getTime()}.${fileType}`;
      const fileContents = req.files.file.data;
      const fileResult = await drive.put(fileName, {
        data: fileContents,
        contentType: req.files.file.mimetype,
      });
      res.send(`${process.env.BASE_URL}/photos/download/${fileResult}`);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async download(req, res) {
    try {
      const fileName = req.params.name;
      const fileContent = await drive.get(fileName);
      const buffer = await fileContent.arrayBuffer();

      res.type(fileContent.type);
      res.send(Buffer.from(buffer));
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new PhotoController();
