const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

const upload = multer({ dest: "uploads/" });

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

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

    const photos = files.map((file, index) => ({
      id: index,
      url: `/uploads/${file}`,
      description: file,
      likes: 0,
    }));

    res.json(photos);
  });
});

app.post("/api/photos/:id/like", (req, res) => {
  const photoId = parseInt(req.params.id, 10);

  // Read the photos data from the file system
  fs.readdir(path.join(__dirname, "uploads"), (err, files) => {
    if (err) return res.status(500).send("Error reading files.");

    const photos = files.map((file, index) => ({
      id: index,
      url: `/uploads/${file}`,
      description: file,
      likes: 0,
    }));

    const photo = photos.find((p) => p.id === photoId);
    if (!photo) {
      return res.status(404).send("Photo not found.");
    }

    photo.likes += 1;

    // Save the updated photos data back to the file system
    // (In a real application, you would save this data to a database)
    res.status(200).send("Photo liked successfully.");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});