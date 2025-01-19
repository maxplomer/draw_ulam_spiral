const { createCanvas, loadImage } = require('canvas')
const terminalImagePromise = import('terminal-image')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')

ctx.fillRect(0, 0, 1, 1);
ctx.fillRect(100, 100, 1, 1);

const base64String = canvas.toDataURL()
const base64Data = base64String.replace(/^data:image\/\w+;base64,/, "");
const buffer = Buffer.from(base64Data, "base64");

terminalImagePromise.then((terminalImage) => {
  terminalImage.default.buffer(buffer).then((image) => {
    console.log(image)
  })
});
