let intention = [" Take it easy 😎 ", " Be present and connected 🎁 ", 
" Set a goal for today 🦾 ", " Forgive others and yourself 🫀 ", 
" Que sera, sera ✨ ", " Today's a new day 🌅 ", 
" One step at a time 🧗‍♀️ "];
function fetchIntention(){
    let randNo = Math.floor(Math.random()*intention.length);
    document.getElementById("intention").innerHTML = intention[randNo];
}
