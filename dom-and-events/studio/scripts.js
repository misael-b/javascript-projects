// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    const takeoff = document.getElementById("takeoff");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight")

    takeoff.addEventListener("click", function () {
        let userResponceTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (userResponceTakeoff) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = 'blue';
            let initialHeight = parseInt(spaceShuttleHeight.innerHTML);
            let newHeight = initialHeight + 10000;
            spaceShuttleHeight.innerHTML = newHeight;
        };
    });

    const land = document.getElementById("landing")
    land.addEventListener("click", function () {
        let userResponceLanding = window.confirm("The shuttle is landing. Landing gear engaged.");
        if (userResponceLanding) {
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = 'green';
            let initialHeight = parseInt(spaceShuttleHeight.innerHTML);
            let newHeight = initialHeight - 10000;
            spaceShuttleHeight.innerHTML = newHeight;

        };
    });

    const abortMission = document.getElementById("missionAbort")
    abortMission.addEventListener("click", function () {
        let userResponceAbort = window.confirm("Confirm that you want to abort the mission.");
        if (userResponceAbort) {
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = 'green'
            spaceShuttleHeight.innerHTML = 0;
        }
    });
 };




window.addEventListener("load", init);
