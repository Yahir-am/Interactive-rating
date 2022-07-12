const buttons = document.querySelectorAll("li");
const submit = document.querySelector(".send");
const valuation = document.querySelector(".valuation");
const secondCard = document.querySelector(".second--card");
const firstCard = document.querySelector(".first--card");

submit.addEventListener('click',cardInteraction);

buttons.forEach(btn => {
    btn.addEventListener('click',ratingStyle);
})

function ratingStyle(event){
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    })
    if(event.target.classList.contains('selected')){
        event.target.classList.add('selected');
    }else{
        event.target.classList.add('selected');
    }
    const value = event.target.textContent;
    valuation.textContent = `You selected ${value} of 5`
}
function cardInteraction(){
    firstCard.classList.add('hidden');
    secondCard.classList.remove('hidden');
}