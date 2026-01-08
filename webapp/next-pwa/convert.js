// convert.js
const sharp = require("sharp");

sharp("file.svg")
  .resize(192, 192)
  .png()
  .toFile("192.png");

sharp("file.svg")
  .resize(512, 512)
  .png()
  .toFile("512.png");
