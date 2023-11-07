//TODO: Add Your Code Below
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            console.log(json);
            const container = document.getElementById("container");

            
            // for (let i = 0; i < json.length; i++){
            //     let firstName = json[i].firstName
            //     let lastName = json[i].lastName
            //     let active = json[i].active
            //     let hoursInSpace = json[i].hoursInSpace
            //     let skills = ""
            //     let image = json[i].picture
            //     for (let j = 0; j < json[i].skills.length; j++) {
            //         if (j < json[i].skills.length - 1) {
            //             skills += json[i].skills[j] + ", "
            //         } else {
            //             skills += json[i].skills[j]
            //         }
                    
            //     }
            //     container.innerHTML += `<div class="astronaut">
            //      <div class="bio">
            //         <h3>${firstName + " " + lastName}</h3>
            //             <ul>
            //                 <li>Hours in space: ${hoursInSpace}</li>
            //                 <li>Active: ${active}</li>
            //                 <li>Skills: ${skills}</li>
            //             </ul>
            //     </div>
            //     <img class="avatar" src="${image}">
            // </div>`
                
            // }




            // Sort from most to least time in space
            mintimeArray = []
        
            for (let i = 0; i < json.length; i++){
                mintimeArray.push(json[i].hoursInSpace)
            }
            mintimeArray = mintimeArray.sort(function (a, b) {
                return a - b;
            });

            for (let i = 0; i < mintimeArray.length; i++){
                for (let j = 0; j < json.length; j++){
                    if (json[j].hoursInSpace === mintimeArray[i]) {
                        let firstName = json[j].firstName
                        let lastName = json[j].lastName
                        let active = json[j].active
                        let hoursInSpace = json[j].hoursInSpace
                        let skills = ""
                        let image = json[j].picture
                        for (let k = 0; k < json[j].skills.length; k++) {
                            if (k < json[j].skills.length - 1) {
                                skills += json[j].skills[k] + ", "
                            } else {
                                skills += json[j].skills[k]
                            }
                            
                        }
                        if (active === true || active === "true") {
                            container.innerHTML += `<div class="astronaut">
                        <div class="bio">
                            <h3>${firstName + " " + lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${hoursInSpace}</li>
                                    <li style= "color:green;" = "active" >Active: ${active}</li>
                                    <li>Skills: ${skills}</li>
                                </ul>
                        </div>
                        <img class="avatar" src="${image}">
                    </div>`
                        } else {
                            container.innerHTML += `<div class="astronaut">
                        <div class="bio">
                            <h3>${firstName + " " + lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${hoursInSpace}</li>
                                    <li id = "not active" >Active: ${active}</li>
                                    <li>Skills: ${skills}</li>
                                </ul>
                        </div>
                        <img class="avatar" src="${image}">
                    </div>`
                        }
                        
                    }
                   
                    
                }
                
            }

            


            

            
        });
    });
});

