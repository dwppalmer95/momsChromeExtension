const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const imgDir = path.join(__dirname, '../server/data/nature')
  const fileNames = fs.readdirSync(imgDir);
  const randomInteger = Math.floor(Math.random() * fileNames.length);
  const pattern = `^${randomInteger}_.*`;
  const regex = new RegExp(pattern);
  let imgPath;
  for (let i = 0; i < fileNames.length; i++) {
    const fileName = fileNames[i];
    if (fileName.match(regex)) {
      imgPath = path.join(imgDir, fileName);
      console.log(imgPath);
      break;
    }
  }
  res.set({
    'Access-Control-Allow-Origin': 'chrome-extension://jegelamlcopnofagkldfnmpebeecdcch'
  })
  res.sendFile(imgPath);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));