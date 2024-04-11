
function showRoutine(){
    const  routine = document.getElementById("daily-routine");
    routine.classList.add("d-block");   
    setTimeout(() => {
        routine.classList.remove("d-block");
    }, 10000);
    routine.classList.add("animation");
            setTimeout(() => {
                routine.classList.remove("animation");
            }, 1000);

}