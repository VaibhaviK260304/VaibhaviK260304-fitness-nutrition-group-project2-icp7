// submit

function submit(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");
    let email = document.getElementById("email");
  

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