let count1 = document.getElementById("demoInput1");

let count2 = document.getElementById("demoInput2");

let count3 = document.getElementById("demoInput3");

let count4 = document.getElementById("demoInput4");




function increment(id) {

    document.getElementById(id).stepUp();
    Total_Price();
}
function decrement(id) {

    document.getElementById(id).stepDown();
    Total_Price();
}
//    
var hearts = document.querySelectorAll(" .fa-heart");
for(var i=0; i<hearts.length;i++){
hearts[i].addEventListener("click", function (e) {
    e.target.classList.toggle("color");
});
}
//remove element 1
function del1() {
    let count1 = document.getElementById("demoInput1");


    this.addEventListener("click", function () {
        console.log(count1)
        count1.value = 0;
        total.textContent = count1.value * 25 + count2.value * 44 + count3.value * 15 + count4.value * 70;
    });
}

//remove element 2
function del4() {
    let count2 = document.getElementById("demoInput2");


    this.addEventListener("click", function () {
        console.log(count4)
        count2.value = 0;
        total.textContent = count1.value * 25 + count2.value * 44 + count3.value * 15 + count4.value * 70;
    });
}
//remove element 3
function del3() {
    let count3 = document.getElementById("demoInput3");


    this.addEventListener("click", function () {
        console.log(count4)
        count3.value = 0;
        total.textContent = count1.value * 25 + count2.value * 44 + count3.value * 15 + count4.value * 70;
    });
}
//remove element 4
function del4() {
    let count4 = document.getElementById("demoInput4");


    this.addEventListener("click", function () {
        console.log(count4)
        count4.value = 0;
        total.textContent = count1.value * 25 + count2.value * 44 + count3.value * 15 + count4.value * 70;
    });
}
// total 
function Total_Price() {

    let total = document.querySelector("#total");
    console.log(count1)
    total.textContent = count1.value * 25 + count2.value * 44 + count3.value * 15 + count4.value * 70;
}
