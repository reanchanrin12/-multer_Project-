const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.create = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image is required!" });
    }
    const imagePath = req.file.path.replace('public/', ''); //remove public from the path
    const newProduct = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        description,
        imagePath: imagePath,
      }
    });

    res.status(201).json({
      message: "Product uploaded successfully!",
      product: newProduct
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error!" });
  }
};

exports.list = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    console.log(products);
    res.json(products);
    
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
