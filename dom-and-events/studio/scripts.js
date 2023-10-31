// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    const takeoff = document.getElementById("takeoff");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById('right');
    const left = document.getElementById('left')
    const rocket = document.getElementById('rocket')
    rocket.style.position = 'absolute'
    rocket.style.left = '0px'
    rocket.style.top = '250px'


    takeoff.addEventListener("click", function () {
        let userResponceTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (userResponceTakeoff) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = 'blue';
            let initialHeight = parseInt(spaceShuttleHeight.innerHTML);
            let newHeightNum = initialHeight + 10000;
            spaceShuttleHeight.innerHTML = newHeightNum;
            let currentHeight = rocket.style.top.slice(0, -2)
            let newHeight = Number(currentHeight) - 10;
            rocket.style.top = newHeight + 'px'
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
            rocket.style.left = '0px'
            rocket.style.top = '250px'
        }
    });

    
    
    
    left.addEventListener("click", function () {
        let currentWidth = rocket.style.left.slice(0,-2)
        let newWidth = Number(currentWidth) - 10;
        rocket.style.left = newWidth + 'px'

    
    });

    right.addEventListener('click', function () {
        let currentWidth = rocket.style.left.slice(0, -2)
        let newWidth = Number(currentWidth) + 10;
        rocket.style.left = newWidth + 'px'
    })

    up.addEventListener('click', function () {
        let currentHeight = rocket.style.top.slice(0, -2)
        let newHeight = Number(currentHeight) - 10;
        rocket.style.top = newHeight + 'px'
        let initialHeight = parseInt(spaceShuttleHeight.innerHTML);
        let newHeightNum = initialHeight + 10000;
        spaceShuttleHeight.innerHTML = newHeightNum
    });

    down.addEventListener('click', function () {
        let currentHeight = rocket.style.top.slice(0, -2)
        let newHeight = Number(currentHeight) + 10;
        rocket.style.top = newHeight + 'px'
        let initialHeight = parseInt(spaceShuttleHeight.innerHTML);
        let newHeightNum = initialHeight - 10000;
        spaceShuttleHeight.innerHTML = newHeightNum
    });
 };




window.addEventListener("load", init);
