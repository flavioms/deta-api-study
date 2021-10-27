const router = require("express").Router();
const ProductController = require("../controller/ProductController");

router.get("/products", ProductController.index);
router.post("/products", ProductController.create);
router.get("/products/:id", ProductController.read);
router.put("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.delete);

module.exports = router;
