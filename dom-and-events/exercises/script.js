function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", function () {
        statusReport.innerHTML = 'Houston, we have liftoff!';
    });

    missionAbort.addEventListener("mouseover", function () {
        document.body.style.backgroundColor = 'red';
    });

    missionAbort.addEventListener("mouseout", function () {
        document.body.style.backgroundColor = '';
    });

    missionAbort.addEventListener("click", function () {
        let userResponce = window.confirm("Are you sure you want to abort the mission?")
        if (userResponce) {
            statusReport.innerHTML = "Mission aborted! Space shuttle returning home";
        };
        
    });
};

window.addEventListener("load", init);
