// submit

function submit(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    if(name.value == "")
    {
        alert("Please Enter Your Name")
    }
    else 
    if(email.value == "")
    {
        alert("Please Enter Your Email")
    }
    else 
    if(message.value == "")
    {
        alert("Please Enter Your Message")
    }

    else
    {
        alert("Thanks for Join : " + name.value)
    }

}