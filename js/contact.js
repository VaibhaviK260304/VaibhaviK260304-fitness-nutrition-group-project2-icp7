// submit

function submit(){
    
    let name = document.getElementById("name");
    console.log(name.value);

    let number = document.getElementById("number");
    console.log(number.value);
    
    let email = document.getElementById("email");
    console.log(email.value);
  

    if(name.value == "")
    {
        alert("Please Enter Your Name")
    }
    else 
    if(number.value == "")
    {
        alert("Please Enter Your phone Number")
    }
    else 
    if(email.value == "")
    {
        alert("Please Enter Your Email Id")
    }

    else
    {
        alert("Thanks for Join : " + name.value)
    }

}