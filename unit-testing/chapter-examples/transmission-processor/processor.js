function processor(transmission) {
    transmission.trim()
    if (transmission.indexOf("::") < 0) {
        // Data is invalid
        return -1;
    }
    let parts = transmission.split("::");

    if (parts.length>2){
        return -1;
    }

    let rawData = parts[1].trim();
    let originalRawData = rawData
    let numOfRawData = originalRawData.slice(1, originalRawData.length - 1)
    let numOforiginalRawData = Number(numOfRawData)

    if (originalRawData[0] !== "<") {
        rawData = -1;
    }  else  if (originalRawData[originalRawData.length-1] !== '>') {
        rawData = -1;
    } else if (numOfRawData.includes('<') || numOfRawData.includes('>')) {
        rawData = -1;
    } else {
        if (numOforiginalRawData % 1 === 0) {
            rawData = numOforiginalRawData;
        } else {
            rawData = -1
        }
        
    }

    let idOfRawData = parts[0];
    let id = 0
    if (idOfRawData % 1 === 0) {
        id = Number(idOfRawData)
    } else {
        id = -1
    }
    
    
    
    return {
        id: id,
        rawData: rawData
    };
}



module.exports = processor;

