const RPS = require("../RPS.js");

describe("checkFive", function () {

    test("returns 'TIE!' if both players choose the same option", function () {
        let input = RPS('rock', 'rock');
        expect(input).toBe('TIE!')
    });

    test("returns 'Player 1' wins if Player 1 chooses paper and Player 2 chooses rock", function () {
        let input = RPS('paper', 'rock');
        expect(input).toBe('Player 1 wins!')
    })

    test("returns 'Player 1' wins if Player 1 chooses rock and Player 2 chooses scissors", function () {
        let input = RPS('rock', 'scissors');
        expect(input).toBe('Player 1 wins!')
    })

    test("returns 'Player 1' wins if Player 1 chooses scissors and Player 2 chooses paper", function () {
        let input = RPS('scissors', 'paper');
        expect(input).toBe('Player 1 wins!')
    })

    test("returns 'Player 2' wins if Player 2 chooses paper and Player 1 chooses rock", function () {
        let input = RPS('rock', 'paper');
        expect(input).toBe('Player 2 wins!')
    })

    test("returns 'Player 2' wins if Player 2 chooses rock and Player 1 chooses scissors", function () {
        let input = RPS('scissors', 'rock');
        expect(input).toBe('Player 2 wins!')
    })

    test("returns 'Player 2' wins if Player 2 chooses scissors and Player 1 chooses paper", function () {
        let input = RPS('paper', 'scissors');
        expect(input).toBe('Player 2 wins!')
    })

    test("returns 'invalid input' if input is something other than rock, paper, scissors", function () {
        let input = RPS('rock', 'hello');
        expect(input).toBe('INVALID INPUT. TRY AGAIN');
    })

});