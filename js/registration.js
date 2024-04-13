
function data(){


var a=document.getElementById("n1").value;
var b=document.getElementById("n2").value;
var c=document.getElementById("n3").value;
var d=document.getElementById("n4").value;

if(a==""||b==""||c==""||d=="")
{
    alert("All Fields are mendatory")
    return false;
} 

else if(b.length<10||b.length>10)
{
    alert("Number should be of 10 digits : Please enter valid number")
    return false;
} 
else if(isNaN(b))
{
    alert("Only Numbers are allowed ! Please enter valid number")
    return false;
} 
else if(c!=d)
{
    alert("Please enter same password");
    return false;
} 
else
{
    true;

}

}

/*Nav Bar Js*/
function index(){
    document.getElementById("index").style.color="rgb(20,253,30)";
    document.getElementById("about").style.color="white";
    document.getElementById("contact").style.color="white";
    document.getElementById("guide").style.color="white";
    document.getElementById("feedback").style.color="white";
    document.getElementById("login").style.color="white";
    document.getElementById("registration").style.color="white";
}
function about(){
    document.getElementById("about").style.color="rgb(20,253,30)";
    document.getElementById("contact").style.color="white";
    document.getElementById("guide").style.color="white";
    document.getElementById("feedback").style.color="white";
    document.getElementById("login").style.color="white";
    document.getElementById("registration").style.color="white";
}
function contact(){
    document.getElementById("about").style.color="white";
    document.getElementById("contact").style.color="rgb(20,253,30)";
    document.getElementById("guide").style.color="white";
    document.getElementById("feedback").style.color="white";
    document.getElementById("login").style.color="white";
    document.getElementById("registration").style.color="white";

}
function guide(){
    document.getElementById("about").style.color="white";
    document.getElementById("contact").style.color="white";
    document.getElementById("guide").style.color="rgb(20,253,30)";
    document.getElementById("feedback").style.color="white";
    document.getElementById("login").style.color="white";
    document.getElementById("registration").style.color="white";

}
function feedback(){
    document.getElementById("about").style.color="white";
    document.getElementById("contact").style.color="white";
    document.getElementById("guide").style.color="white";
    document.getElementById("feedback").style.color="rgb(20,253,30)";
    document.getElementById("login").style.color="white";
    document.getElementById("registration").style.color="white";

}
function login(){
    document.getElementById("about").style.color="white";
    document.getElementById("contact").style.color="white";
    document.getElementById("guide").style.color="white";
    document.getElementById("feedback").style.color="white";
    document.getElementById("login").style.color="rgb(20,253,30)";
    document.getElementById("registration").style.color="white";

}
function registration(){
    document.getElementById("about").style.color="white";
    document.getElementById("contact").style.color="white";
    document.getElementById("guide").style.color="white";
    document.getElementById("feedback").style.color="white";
    document.getElementById("login").style.color="white";
    document.getElementById("registration").style.color="rgb(20,253,30)";

}