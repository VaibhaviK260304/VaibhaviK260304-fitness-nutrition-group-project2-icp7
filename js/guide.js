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

// function WorkoutPlan(age) {
    
//     const age=document.getElementById("age").value;
//     const Weight=document.getElementById("weight").value;
//     const height=document.getElementById("height").value;
//     const FitnessLevel=document.getElementById("FitnessLevel");



//     // Check if age is between 20 and 30
//     if (age >= 20 && age <= 30)
//      {
//         const Recommendation=document.getElementById("Recommendation");
//         if (Weight>=30 && Weight<=50) {
//             const Recommendation=document.getElementById("Recommendation")
//         }

//     }



// }

function more() {
    
    document.getElementById("more").style.background="yellow";
    document.getElementById("btn-2").style.background="white";
    document.getElementById("btn-3").style.background="white";
    document.getElementById("btn-4").style.background="white";

}

function btn2() {
    
    document.getElementById("more").style.background="white";
    document.getElementById("btn-2").style.background="yellow";
    document.getElementById("btn-3").style.background="white";
    document.getElementById("btn-4").style.background="white";

}


function btn3() {
    
    document.getElementById("more").style.background="whitw";
    document.getElementById("btn-2").style.background="white";
    document.getElementById("btn-3").style.background="yellow";
    document.getElementById("btn-4").style.background="white";

}

function btn4() {
    
    document.getElementById("more").style.background="white";
    document.getElementById("btn-2").style.background="white";
    document.getElementById("btn-3").style.background="white";
    document.getElementById("btn-4").style.background="yellow";

}

function btnn1() {
    document.getElementById("btnn1").style.background="yellow";
    document.getElementById("card").style.border="5px solid black";
    // document.getElementById("card").style.background="lightcoral";
    document.getElementById("Level1").style.background="lightcoral";
    document.getElementById("btnn4").style.background="none";
    document.getElementById("card2").style.border="none";
    document.getElementById("Level2").style.background="none";
    document.getElementById("btnn7").style.background="none";
    document.getElementById("card3").style.border="none";
    document.getElementById("Level3").style.background="none";


    

}
function btnn2() {
    document.getElementById("btnn4").style.background="yellow";
    document.getElementById("card2").style.border="5 px solid black";
    document.getElementById("Level2").style.background="lightgreen";
    document.getElementById("btnn1").style.background="none";
    document.getElementById("card").style.border="none";
    // document.getElementById("card").style.background="lightcoral";
    document.getElementById("Level1").style.background="none";
    document.getElementById("btnn7").style.background="none";
    document.getElementById("card3").style.border="none";
    document.getElementById("Level3").style.background="none";
}






function btnn3() {
    document.getElementById("btnn7").style.background="yellow";
    document.getElementById("card3").style.border="5px solid black";
    document.getElementById("Level3").style.background="lightblue";
    document.getElementById("btnn4").style.background="none";
    document.getElementById("card2").style.border="none";
    document.getElementById("Level2").style.background="none";
    document.getElementById("btnn1").style.background="none";
    document.getElementById("card").style.border="none";
    // document.getElementById("card").style.background="lightcoral";
    document.getElementById("Level1").style.background="none";
}



function register(){
    let name=document.getElementById("Loginname");
    let emailid = document.getElementById("emailid");
    let mob = document.getElementById("mobno");
    let age=document.getElementById("agecount");

    if (name.value=="") {
        alert("Please Enter Name")
    }
    else if(emailid.value==""){
        alert("Please Enter Email")
    }
    else if(mob.value==""){
        alert("Please Enter Mob No")
    }
    else if(age.value==""){
        alert("Please Enter age")
    }
    else{
       alert("Thanks For Register . We will contact you") 
    }
}