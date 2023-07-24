const express = require("express");
const upload = require("../middelware/upload");
const { uploadImage, downloadImage } = require("../controller/imageController");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadImage);
router.get("/file/:fileId", downloadImage);

module.exports = router;
