const terminalImagePromise = import('terminal-image')

terminalImagePromise.then((terminalImage) => {
  terminalImage.default.file('example.png').then((image) => {
    console.log(image)
  })
});
