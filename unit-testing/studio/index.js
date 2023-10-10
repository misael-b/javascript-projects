
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees:100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function (input) {
        if ((input % 2 === 0) && (input % 3 === 0) && (input % 5 === 0)) { 
            return 'LaunchCode Rocks!';
        }else if ((input % 2 === 0) && (input % 3 === 0)) {
            return 'LaunchCode!';
        } else if ((input % 3 === 0) && (input % 5 === 0)) { 
            return 'Code Rocks!';
        } else if ((input % 2 === 0) && (input % 5 === 0)) { 
            return 'Launch Rocks! (CRASH!!!!)'
        } else if (input % 2 === 0) {
            return 'Launch!';
        } else if (input % 3 === 0) {
            return 'Code!';
        } else if (input % 5 === 0) {
            return 'Rocks!';
        } else {
            return `Rutabagas! That doesn't work.`
        }
    }
}

module.exports = launchcode;

