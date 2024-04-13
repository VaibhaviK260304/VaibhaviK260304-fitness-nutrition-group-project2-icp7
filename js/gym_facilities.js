
function showRoutine(){
    const  routine = document.getElementById("daily-routine");
    routine.classList.remove("d-none");
    routine.classList.add("d-block");   
    setTimeout(() => {
        routine.classList.remove("d-block");
    }, 10000);
    routine.classList.add("animation");
            setTimeout(() => {
                routine.classList.remove("animation");
            }, 1000);

}
let previousCard;

function changeColor(card) {
    if (previousCard) {
        previousCard.style.backgroundColor = '#ffff';
        previousCard.querySelector('.card-body').style.backgroundColor = '#ffff';
        previousCard.querySelector('.get-btn').style.color = 'white';
        previousCard.querySelector('.get-btn').classList.add('bg-dark');
        previousCard.querySelector('.price').style.color = '#fff';
    }
    card.style.transition = "background-color.4s";
    card.style.backgroundColor = "#ffc36b";
    card.querySelector('.card-body').style.backgroundColor = "#ffc36b";
    card.querySelector('.price').style.color = 'red';
    card.querySelector('.get-btn').classList.remove('bg-dark') ;
    card.querySelector('.get-btn').style.backgroundColor = 'gold';
    card.querySelector('.get-btn').style.color = 'black';
    previousCard = card;
}
