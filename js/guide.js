// function WorkoutPlan() {
//     let fullName= document.getElementById("name");
//     let Number=document.getElementById("num");
//     let age=document.getElementById("age");

//     if(fullName.value==""){
//         alert("Please Enter Name")
//     }
//     else if(Number.value==""){
//         alert("Please Enter Number")
//     }
//     else if (age.value=="") {
//         alert("Please Enter age")
//     }
//     else{
//         alert("Thanks For Joing :"+fullName.value)
//     }

// }

function WorkoutPlan(age) {
    
    const age=document.getElementById("age").value;
    const Weight=document.getElementById("weight").value;
    const height=document.getElementById("height").value;
    const FitnessLevel=document.getElementById("FitnessLevel");



    // Check if age is between 20 and 30
    if (age >= 20 && age <= 30)
     {
        const Recommendation=document.getElementById("Recommendation");
        Recommendation.innerText="Hello Rushi";

    }



}