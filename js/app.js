// //console.log(`Hello`);
// //window.alert(`This is an alert`);
// document.getElementById("ht").textContent = "Welcome "
// document.getElementById("inp").onchange = function(ev){
//     //let val = document.getElementById("inp").value;
//     document.getElementById("ht").innerHTML = `Welcome ${ev.target.value}`;
// }  

const increase = document.getElementById("inc");
const reset = document.getElementById("res");
const decrease = document.getElementById("dec");
let count = 0;
document.getElementById("cnt").innerHTML = count;
increase.onclick = ()=> {
    count ++;
    document.getElementById("cnt").innerHTML = count;
}
decrease.onclick = ()=> {
    count --;
    document.getElementById("cnt").innerHTML = count;
}
reset.onclick = ()=> {
    count = 0;
    document.getElementById("cnt").innerHTML = count;
}
