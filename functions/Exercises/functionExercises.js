function makeLine(size, symbol = '#') {
    let line = ''
    for (let i = 0; i < size; i++) {
        line += symbol
    }
    return line;
}


function makeSquare(size, symbol = '#') {
    // let square = '';
    // for (let i = 0; i < size; i++){
    //     let lengthSquare = makeLine(size)
    //     if (i < size-1) {
    //         square += lengthSquare + '\n';
    //     } else {
    //         square += lengthSquare
    //     }
    let square = makeRectangle(size, size, symbol);

    return square;
}





function makeRectangle(width, height, symbol = '#') {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        let widthOfRectangle = makeLine(width, symbol);
        if (i < height - 1) {
            rectangle += widthOfRectangle + '\n';
        } else {
            rectangle += widthOfRectangle
        }
    }
    return rectangle
}



function makeDownwardStairs(height, symbol = '#') {
    let staircasePattern = '';
    for (let i = 1; i < height + 1; i++) {
        widthOfShape = makeLine(i, symbol);
        staircasePattern += widthOfShape + '\n'
    }
    return staircasePattern.slice(0, -1)
}



function makeSpaceLine(numSpaces, numChars, symbol = '#') {
    let Spaces = ''
    for (let i = 0; i < numSpaces; i++) {
        Spaces += ' '
    }
    lineOfSpaces = Spaces + makeLine(numChars, symbol) + Spaces

    return lineOfSpaces
}


function makeIsoscelesTriangle(height, symbol = '#') {
    let IsoscelesTriangle = ''
    for (let i = 0; i < height; i++) {
        let widthOfIsoscelesTriangle = makeSpaceLine(height - i - 1, 2 * i + 1, symbol);
        IsoscelesTriangle += widthOfIsoscelesTriangle + '\n';
    }
    return IsoscelesTriangle.slice(0, -1);
}



function makeDiamond(height, symbol = '#') {
    let topOfDiamond = makeIsoscelesTriangle(height, symbol) + '\n';
    let bottomOfDiamond = '';
    for (let i = 0; i < height; i++) {
        let widthOfBottomOfDiamond = makeSpaceLine((i), (-2 * i + 9), symbol)
        bottomOfDiamond += widthOfBottomOfDiamond + '\n'
    }
    diamond = topOfDiamond + bottomOfDiamond;
    return diamond.slice(0, -1)
}

console.log(makeDiamond(5));
