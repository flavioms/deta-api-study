const db = require("../config/base");

class ProductController {
  async index(req, res) {
    try {
      const products = await db.fetch({});
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async create(req, res) {
    try {
      const { name, description, price } = req.body;
      const toCreate = { name, description, price };
      const insertedProduct = await db.put(toCreate);
      res.status(201).json(insertedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async read(req, res) {
    try {
      const { id } = req.params;
      const product = await db.get(id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: "product not found" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, description, price } = req.body;
      const toPut = { key: id, name, description, price };
      const newProduct = await db.put(toPut);
      return res.json(newProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await db.delete(id);
      res.json({ message: "deleted" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new ProductController();
