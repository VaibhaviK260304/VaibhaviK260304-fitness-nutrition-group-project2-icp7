/*Nav Bar Js*/
function index(){
    document.getElementById("index").style.color="rgb(20,253,30)";
    document.getElementById("about").style.color="white";
    document.getElementById("contact").style.color="white";
    document.getElementById("guide").style.color="white";
    document.getElementById("login").style.color="white";
    document.getElementById("registration").style.color="white";
}
function about(){
    document.getElementById("index").style.color="white";
    document.getElementById("about").style.color="rgb(20,253,30)";
    document.getElementById("contact").style.color="white";
    document.getElementById("guide").style.color="white";
    document.getElementById("login").style.color="white";
    document.getElementById("registration").style.color="white";
}
function contact(){
    document.getElementById("index").style.color= "white";
    document.getElementById("about").style.color="white";
    document.getElementById("contact").style.color="rgb(20,253,30)";
    document.getElementById("guide").style.color="white";
    document.getElementById("login").style.color="white";
    document.getElementById("registration").style.color="white";

}
function guide(){
    document.getElementById("index").style.color= "white";
    document.getElementById("about").style.color="white";
    document.getElementById("contact").style.color="white";
    document.getElementById("guide").style.color="rgb(20,253,30)";
    document.getElementById("login").style.color="white";
    document.getElementById("registration").style.color="white";

}
function login(){
    document.getElementById("index").style.color= "white";
    document.getElementById("about").style.color="white";
    document.getElementById("contact").style.color="white";
    document.getElementById("guide").style.color="white";
    document.getElementById("login").style.color="rgb(20,253,30)";
    document.getElementById("registration").style.color="white";

}
function registration(){
    document.getElementById("index").style.color= "white";
    document.getElementById("about").style.color="white";
    document.getElementById("contact").style.color="white";
    document.getElementById("guide").style.color="white";
    document.getElementById("login").style.color="white";
    document.getElementById("registration").style.color="rgb(20,253,30)";

}
  function toggleBookmark() 
  {
      let bookmark = document.getElementById("bookmark");
      if (bookmark.src.match("./icons/home/bookmark-white.png")) 
      {
        bookmark.src = "./icons/home/bookmark.png";
      } 
      else 
      {
        bookmark.src = "./icons/home/bookmark-white.png";
      }
  }
  function toggleBookmark1() 
  {
      let bookmark1 = document.getElementById("bookmark1");
      if (bookmark1.src.match("./icons/home/bookmark-white.png")) 
      {
        bookmark1.src = "./icons/home/bookmark.png";
      } 
      else 
      {
        bookmark1.src = "./icons/home/bookmark-white.png";
      }
  }
  function toggleBookmark2() 
  {
      let bookmark2 = document.getElementById("bookmark2");
      if (bookmark2.src.match("./icons/home/bookmark-white.png")) 
      {
        bookmark2.src = "./icons/home/bookmark.png";
      } 
      else 
      {
        bookmark2.src = "./icons/home/bookmark-white.png";
      }
  }
  function toggleBookmark3() 
  {
      let bookmark3 = document.getElementById("bookmark3");
      if (bookmark3.src.match("./icons/home/bookmark-white.png")) 
      {
        bookmark3.src = "./icons/home/bookmark.png";
      } 
      else 
      {
        bookmark3.src = "./icons/home/bookmark-white.png";
      }
  }
  
  function toggleDescription(button) {
    let description = button.previousElementSibling;
    if (description.style.display === "none") {
      description.style.display = "block";
      button.textContent = "Hide Description";
    } else {
      description.style.display = "none";
      button.textContent = "Show Description";
  
    }
  }