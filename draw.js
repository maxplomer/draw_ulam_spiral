const { createCanvas, loadImage } = require('canvas')
const terminalImagePromise = import('terminal-image')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')

const isPrime = (x) => {
  if (x == 1) return false
  if (x == 2) return true

  let i = 2
  while (true) {
    if (i >= x / 2) return true
    if (x % i == 0) return false
    i += 1
  }
}

const dx = 100, dy = 100
let counter = 1, x = 0, y = 0, walk = 1, direction = 1

while (true) {
  if (counter >= 40000) break

  for (let step = 1; step <= walk; step++) {
    x += direction
    counter += 1
    if (isPrime(counter)) {
      ctx.fillRect(x + dx, y + dy, 1, 1)
    }
  }

  for (let step = 1; step <= walk; step++) {
    y += direction
    counter += 1
    if (isPrime(counter)) {
      ctx.fillRect(x + dx, y + dy, 1, 1)
    }
  }

  walk += 1
  direction *= -1
}

const base64String = canvas.toDataURL()
const base64Data = base64String.replace(/^data:image\/\w+;base64,/, "");
const buffer = Buffer.from(base64Data, "base64");

terminalImagePromise.then((terminalImage) => {
  terminalImage.default.buffer(buffer).then((image) => {
    console.log(image)
  })
});
