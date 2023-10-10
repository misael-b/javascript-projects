// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("the value of organization is 'nonprofit'", function () {
    let input = launchcode.organization;
    expect(input).toBe('nonprofit');
  });

  test("checks that the value of executiveDirector is 'Jeff'", function () {
    let input = launchcode.executiveDirector;
    expect(input).toBe('Jeff');
  });

  test("checks that the value of percentageCoolEmployees if 100", function () {
    let input = launchcode.percentageCoolEmployees;
    expect(input).toBe(100);
  });

  test("checks the value of programsOffered", function () {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test(`When passed a number that is ONLY divisible by 2, launchOutput() returns 'Launch!'`, function () {
    let input = launchcode.launchOutput(2);
    expect(input).toBe('Launch!')
  });

  test(`When passed a number that is ONLY divisible by 3, launchOutput() returns 'Code!'`, function () {
    let input = launchcode.launchOutput(3);
    expect(input).toBe('Code!')
  });

  test(`When passed a number that is ONLY divisible by 5, launchOutput() returns 'Rocks!'`, function () {
    let input = launchcode.launchOutput(5);
    expect(input).toBe('Rocks!')
  });

  test(`When passed a number that is divisible by 2 AND 3, launchOutput() returns 'LaunchCode!'`, function () {
    let input = launchcode.launchOutput(6);
    expect(input).toBe('LaunchCode!')
  });

  test(`When passed a number that is divisible by 3 AND 5, launchOutput() returns 'Code Rocks!'`, function () {
    let input = launchcode.launchOutput(15);
    expect(input).toBe('Code Rocks!')
  });

  test(`When passed a number that is divisible by 2 AND 5, launchOutput() returns 'Launch Rocks!'`, function () {
    let input = launchcode.launchOutput(10);
    expect(input).toBe('Launch Rocks! (CRASH!!!!)')
  });

  test(`When passed a number that is divisible by 2,3 AND 5, launchOutput() returns 'LaunchCode Rocks!'`, function () {
    let input = launchcode.launchOutput(30);
    expect(input).toBe('LaunchCode Rocks!')
  });

  test(`When passed a number that is NOT divisible by 2,3 AND 5, launchOutput() returns 'Rutabagas! That doesn't work.'`, function () {
    let input = launchcode.launchOutput(1);
    expect(input).toBe(`Rutabagas! That doesn't work.`)
  });


});