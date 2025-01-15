// // Simple script to resize images
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const directory =
  "/Users/telecasteren/Desktop/DEV/School/schoolWork/project-exam-1-tele-c/resources/IMAGES/";

fs.readdirSync(directory).forEach((file) => {
  const filePath = path.join(directory, file);
  const ext = path.extname(file).toLowerCase();

  // Only process image files
  if (
    ext === ".jpg" ||
    ext === ".jpeg" ||
    ext === ".png" ||
    ext === ".gif" ||
    ext === ".webp"
  ) {
    sharp(filePath)
      .resize(200, 100)
      .toFile(
        `${directory}/${path.basename(file, ext)}-small${ext}`,
        (err, info) => {
          if (err) {
            console.error(`Error processing file ${file}:`, err);
          } else {
            console.log(`Resized ${file}:`, info);
          }
        }
      );
  }
});
