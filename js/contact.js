// submit

function submit(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");

    if(name.value == "")
    {
        alert("Please Enter Your Name")
    }
    else 
    if(number.value == "")
    {
        alert("Please Enter Your Number")
    }
    else 
    if(email.value == "")
    {
        alert("Please Enter Your Email ID")
    }

    else
    {
        alert("Thanks for Join : " + name.value)
    }

}