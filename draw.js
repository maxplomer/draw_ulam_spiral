const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')

ctx.fillRect(0, 0, 1, 1);
ctx.fillRect(100, 100, 1, 1);

dataUrl = canvas.toDataURL()

console.log(dataUrl)
