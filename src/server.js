const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

const upload = multer({ dest: "uploads/" });

app.use(express.static(path.join(__dirname, "public")));

app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, "uploads", req.file.originalname);

  fs.rename(tempPath, targetPath, (err) => {
    if (err) return res.status(500).send("Error moving file.");

    res.status(200).send("File uploaded successfully.");
  });
});

app.get("/api/photos", (req, res) => {
  fs.readdir(path.join(__dirname, "uploads"), (err, files) => {
    if (err) return res.status(500).send("Error reading files.");

    const photos = files.map((file) => ({
      url: `/uploads/${file}`,
      description: file,
    }));

    res.json(photos);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});