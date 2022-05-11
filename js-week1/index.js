let intention=[" Take it easy 😎 ", " Be present and connected 🎁 ", 
" Think of 1 goal you want to achieve and achieve it today 🦾 ", " Forgive others and yourself 🫀 ", 
" Que sera, sera ✨ ", " Carpe diem 🎢 ", 
" Today's a new day 🌅 ", " Memento mori 💀 ", 
" One step at a time 🧗‍♀️ ", " Enjoy it as it goes 🕉 "];
function fetchIntention(){
    let randNo = Math.floor(Math.random()*intention.length);
    document.getElementById("intention").innerHTML = intention[randNo];
}