const generateLogo = (userInput, shapeContent) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Logo Generator</title>
    </head>
    <body>
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
            <${shapeContent} fill="${userInput.shapeColor}"/>
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.textColor}">${userInput.characters}</text>
          
          </svg>
    </body>
    </html>`
}

module.exports = {generateLogo}