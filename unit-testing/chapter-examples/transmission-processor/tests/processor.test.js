const processor = require('../processor.js');

describe("transmission processor", function () {

  //  TODO: put tests here

  test("takes a string returns an object", function () {
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe("object");
  });

  test("returns -1 if '::' not found", function () {
    let result = processor("9701<489584872710>");
    expect(result).toBe(-1);
  });

  test("returns id in object", function () {
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();
  });
  
  test("converts id to a number", function () {
    let result = processor("9701::<489584872710>");
    expect(result.id).toBe(9701);
  });

  test("returns rawData in object", () => {
    let result = processor("9701::<487297403495720912>");
    expect(result.rawData).not.toBeUndefined();
  });

  test("returns -1 for rawData if missing < at position 0", function () {
    let result = processor("9701::487297403495720912>");
    expect(result.rawData).toBe(-1);
  });

  test("returns -1 for rawData if > is in the middle of string", function () {
    let result = processor("9701::8729740349572>0912");
    expect(result.rawData).toBe(-1);
  })

  test("returns -1 for rawData if < not at the end position", function () {
    let result = processor("9701::4872<97403495720912");
    expect(result.rawData).toBe(-1);
  })

  

  test("returns -1 for rawData if > present", function () {
    let result = processor("9701::487297403495720912");
    expect(result.rawData).toBe(-1);
  })

  test("returns -1 for rawData if <> is present in the middle of a string", function () {
    let result = processor("9701::<487297403495<720912>");
    expect(result.rawData).toBe(-1);
  })

  test("eliminates leading white spaces from the original transmition", function () {
    let result = processor("9701::<489584872710> ")
    expect(result.id).toBe(9701);
  })

  test("eliminates trailing white spaces from the original transmition", function () {
    let result = processor("9701::<489584872710>  ")
    expect(result.rawData).toBe(489584872710);
  })

  test("answer is correct", function () {
    let result = processor("9701::<489584872710>")
    expect(result.rawData).toBe(489584872710);
  })


  test("id is a number", function () {
    let result = processor("9701a::<489584872710>")
    expect(result.id).toBe(-1);
  })

  test("only one '::' is found in the transmission", function () {
    let result = processor("97::01a::<489584872710>")
    expect(result).toBe(-1);
  })

  test("rawData is a number", function () {
    let result = processor("9701a::<4895848727a10>")
    expect(result.rawData).toBe(-1);
  })

 });