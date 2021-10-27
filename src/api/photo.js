const router = require("express").Router();
const PhotoController = require("../controller/PhotoController");

router.get("/photos/download/:name", PhotoController.download);
router.post("/photos/upload", PhotoController.upload);

module.exports = router;
