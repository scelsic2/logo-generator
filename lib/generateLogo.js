const generateLogo = (userInput, shapeContent) => {
    return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
            <${shapeContent} fill="${userInput.shapeColor}"/>
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.textColor}">${userInput.characters}</text>
          
          </svg>`
}

module.exports = {generateLogo}