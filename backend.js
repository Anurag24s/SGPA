// window.onload = function () {
//     let mode = document.querySelector("#modeLink");

//     mode.addEventListener("click", () => {
//         let cur = mode.innerText;
//         let textColourElements = document.querySelectorAll(".topicofabout");
//         let textColourElements1 = document.querySelectorAll("#headingofcontact");

//         if (cur == "Dark Mode") {
//             mode.innerText = "Light Mode";
//             document.body.style.backgroundColor = "rgb(30, 29, 29)";
//             textColourElements.forEach(element => {
//                 element.style.color = "white";
//             });
//             textColourElements1.forEach(element => {
//                 element.style.color = "white";
//             });
//         } else {
//             mode.innerText = "Dark Mode";
//             document.body.style.backgroundColor = "white";
//             textColourElements.forEach(element => {
//                 element.style.color = "black";
//             });
//             textColourElements1.forEach(element => {
//                 element.style.color = "blue";
//             });
//         }
//     });
// }


window.onload = function () {
    let mode = document.querySelector("#modeLink");

    mode.addEventListener("click", () => {
        let cur = mode.innerText;
        let textColourElements = document.querySelectorAll(".topicofabout");
        let textColourElements1 = document.querySelectorAll("#headingofcontact");
        let textColourElements2 = document.querySelectorAll("#headingofindex");

        if (cur == "Dark Mode") {
            mode.innerText = "Light Mode";
            document.body.style.backgroundColor = "rgb(30, 29, 29)";
            textColourElements.forEach(element => {
                element.style.color = "white";
            });
            textColourElements1.forEach(element => {
                element.style.color = "white";
            });
            textColourElements2.forEach(element => {
                element.style.color = "white";
            });
        } else {
            mode.innerText = "Dark Mode";
            document.body.style.backgroundColor = "white";
            textColourElements.forEach(element => {
                element.style.color = "black";
            });
            textColourElements1.forEach(element => {
                element.style.color = "blue";
            });
            textColourElements2.forEach(element => {
                element.style.color = "black";
            });
        }
    });

    // Sgpa backend
let creditandgrade = document.querySelector(".creditandgrades");
creditandgrade.addEventListener("click", () => {
    var originalnumcourse=document.getElementById("numCourses").value;
    var numCourses = parseInt(document.getElementById("numCourses").value);
    if (numCourses <= 0 || numCourses > 10 || isNaN(numCourses) || originalnumcourse!==String(numCourses)){
        alert("Please enter a valid number of courses between 1 and 10.");
        return;
    }
    var inputFieldsDiv = document.getElementById("inputFields");
    if (inputFieldsDiv) {
        inputFieldsDiv.innerHTML = "";
        for (var i = 0; i < numCourses; i++) {
            var creditsInput = document.createElement("input");
            creditsInput.type = "number";
            creditsInput.placeholder = "Enter credits for course " + (i + 1);
            creditsInput.id = "credits" + i;
            creditsInput.className = "credit-input";

            var gradeInput = document.createElement("input");
            gradeInput.type = "text";
            gradeInput.placeholder = "Enter grade for course " + (i + 1);
            gradeInput.id = "grade" + i;
            gradeInput.className = "grade-input";

            inputFieldsDiv.appendChild(creditsInput);
            inputFieldsDiv.appendChild(gradeInput);
            inputFieldsDiv.appendChild(document.createElement("br"));
        }
        var calculateSGPAButton = document.createElement("button");
            calculateSGPAButton.textContent = "Calculate SGPA";
            calculateSGPAButton.addEventListener("click", calculateSGPA);
            calculateSGPAButton.className="calculateSGPA-Button";
            inputFieldsDiv.appendChild(calculateSGPAButton);

             // Create a div to display SGPA
            var sgpaDisplayDiv = document.createElement("div");
            sgpaDisplayDiv.id = "sgpaDisplay";
            inputFieldsDiv.appendChild(sgpaDisplayDiv);
    } else {
        console.error("Element with id 'inputFields' not found.");
    }
    // Function to calculate SGPA
    function calculateSGPA() {
        var totalCredits = 0;
        var totalWeightedGradePoints = 0;

        for (var i = 0; i < numCourses; i++) {
            var creditsInput = document.getElementById("credits" + i);
            var gradeInput = document.getElementById("grade" + i);
            var credits = parseInt(creditsInput.value);
            var grade = gradeInput.value.toUpperCase();
            var originalCredits = creditsInput.value;
            if (originalCredits !== String(credits)) {
                alert("Please enter valid integer values for credits in course " + (i+1));
                return;
            }
            if (isNaN(credits) || credits <= 0) {
                alert("Please enter valid credits for course " + (i + 1));
                return;
            }

            var gradePoints = 0;
            switch (grade) {
                case "A": gradePoints = 10; break;
                case "AB": gradePoints = 9; break;
                case "B": gradePoints = 8; break;
                case "BC": gradePoints = 7; break;
                case "C": gradePoints = 6; break;
                case "CD": gradePoints = 5; break;
                case "D": gradePoints = 4; break;
                case "F": gradePoints = 3; break;
                default:
                    alert("Please enter a valid grade for course " + (i + 1));
                    return;
            }

            totalWeightedGradePoints += credits * gradePoints;
            totalCredits += credits;
        }

        var sgpa = totalWeightedGradePoints / totalCredits;
        var sgpaDisplayDiv = document.getElementById("sgpaDisplay");
        sgpaDisplayDiv.textContent = "Your SGPA is: " + sgpa.toFixed(2);
        
    }

});




   // ExpectedSgpa
   let semCalculate=document.querySelector(".semCalculate");
   semCalculate.addEventListener("click",()=>{
    var numSem=parseInt(document.getElementById("numSem").value);
    var originalnumsem=document.getElementById("numSem").value;
    if(numSem<=1 || numSem>8 || isNaN(numSem) || originalnumsem!==String(numSem)){
        alert("Please Enter Semester number between 2 to 8");
        return;
    }
    var inputFieldsdiv=document.getElementById("inputFieldsofExpected");
    if(inputFieldsdiv){
        inputFieldsdiv.innerHTML="";









        
        var targetCgpaContainer = document.createElement("div");
        targetCgpaContainer.id = "target-credit";
        targetCgpaContainer.textContent = "Enter your target CGPA:";
    
        // Create an input field for target CGPA
        var targetCgpaInput = document.createElement("input");
        targetCgpaInput.type = "number";
        targetCgpaInput.placeholder = "";
        targetCgpaInput.id = "targetCgpa";
        targetCgpaInput.className = "credit-input";
        // Append the target CGPA elements
        targetCgpaContainer.appendChild(targetCgpaInput);
        inputFieldsdiv.appendChild(targetCgpaContainer);


        var targetCreditContainer = document.createElement("div");
        targetCreditContainer.id = "target-credit";
        targetCreditContainer.textContent = "Enter your total credit in this semester:";

        // Create an input field for total credit in this semester
        var targetCreditInput = document.createElement("input");
        targetCreditInput.type = "number";
        targetCreditInput.placeholder = "";
        targetCreditInput.id = "targetCredit";
        targetCreditInput.className = "credit-input";
        // Append the target CGPA elements
        targetCreditContainer.appendChild(targetCreditInput);
        inputFieldsdiv.appendChild(targetCreditContainer);









    
        for(var i=1;i<numSem;i++){
                var creditsinsem = document.createElement("input");
                creditsinsem.type = "number";
                creditsinsem.placeholder = "Enter total credits in sem " + (i);
                creditsinsem.id = "creditsinsem" + i;
                creditsinsem.className = "credit-input-expected";

                var gradeInputinsem = document.createElement("input");
                gradeInputinsem.type = "number";
                gradeInputinsem.placeholder = "Enter SGPA in Sem " + (i);
                gradeInputinsem.id = "gradeinsem" + i;
                gradeInputinsem.className = "grade-input-expected";
            inputFieldsdiv.appendChild(creditsinsem);
            inputFieldsdiv.appendChild(gradeInputinsem);
            inputFieldsdiv.appendChild(document.createElement("br"));
        }
        var calculateExpectedSGPA = document.createElement("button");
        calculateExpectedSGPA.textContent = "Calculate Expected SGPA";
        calculateExpectedSGPA.addEventListener("click", calculateExpectedSGPAfun);
        calculateExpectedSGPA.className="calculateExpectedSGPA-Button";
            inputFieldsdiv.appendChild(calculateExpectedSGPA);

             // Create a div to display SGPA
            var ExpectedsgpaDisplayDiv = document.createElement("div");
            ExpectedsgpaDisplayDiv.id = "sgpaExpectedDisplay";
            inputFieldsdiv.appendChild(ExpectedsgpaDisplayDiv);
    } else {
        console.error("Element with id 'inputFields' not found.");
    }
    function calculateExpectedSGPAfun() {
        var targetcg = parseFloat(document.getElementById("targetCgpa").value);
        if (targetcg>10 || targetcg<1) {
            alert("Please Enter Target Grade between 1 to 10 ");
            return;
        }
        var totalCredits = parseInt(document.getElementById("targetCredit").value);
        var originalCredits = document.getElementById("targetCredit").value
            if (originalCredits !== String(totalCredits)) {
                alert("Please enter valid integer values for credits in total credit in this sem ");
                return;
            }
        var totalCreditsmulsg = 0;
        var creditinfinalsem = totalCredits;
        var ans = 0;
        for (var i = 1; i <numSem; i++) {
            var creditsInput = document.getElementById("creditsinsem" + i);
            var gradeInput = document.getElementById("gradeinsem" + i);
            var credits = parseInt(creditsInput.value);
            var grade = parseFloat(gradeInput.value);
            totalCreditsmulsg += credits * grade;
            totalCredits += credits;
            if (grade>10 || grade<1) {
                alert("Please Enter Grade between 1 to 10 ");
                return;
            }
            var originalCredits = creditsInput.value;
            if (originalCredits !== String(credits)) {
                alert("Please enter valid integer values for credits in course " + (i));
                return;
            }
            if (isNaN(credits) || credits <= 0) {
                alert("Please enter valid credits for course " + (i ));
                return;
            }
        }
        var sgpa = (targetcg*totalCredits-totalCreditsmulsg)/creditinfinalsem;
        if(sgpa>10){
            var ExpectedsgpaDisplayDiv = document.getElementById("sgpaExpectedDisplay");
            ExpectedsgpaDisplayDiv.textContent = "Your have to score 10 SGPA";
        }
        else if(sgpa<1){
            var ExpectedsgpaDisplayDiv = document.getElementById("sgpaExpectedDisplay");
            ExpectedsgpaDisplayDiv.textContent = "Your have to score 1 SGPA. Why you want this target?";
        }
        else{
            var ExpectedsgpaDisplayDiv = document.getElementById("sgpaExpectedDisplay");
            ExpectedsgpaDisplayDiv.textContent = "Your have to score " + sgpa.toFixed(2)+" SGPA";
        }
    }
    })


};
