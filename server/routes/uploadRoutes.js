const express = require('express');
const { create,list } = require('../controller/uploadController');
const router = express.Router();
const upload = require('../middlewares/upload');

router.post("/products",upload.single("image"), create);

router.get("/products",list);

module.exports = router;
