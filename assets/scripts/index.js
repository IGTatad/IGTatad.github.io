// console.log("Hello world")
// console.log("Welcome to web dev 101")

// var myVariable = 1;
// var thisVariable = "This is a string"
// var thisLetter = "lorem"
// var thisBool = false 
// //Use this array for certain blah blah
// var myArray = [12.76, "this is a string", 'L']


// var sum = firstNum + secNum
// var diff = firstNum - secNum

// console.log(thisLetter + thisVariable)

// function myFunc(n1, n2){
//     return n1 + n2;
// }

// console.log(myFunc(5,3))


// function mySub(n3, n4) {
//     return n3 - n4;
// }

// console.log(mySub(5,3))

// function myMul(n3, n4) {
//     return n3 * n4;
// }

// console.log(myMul(5,3))

// function myDiv(n3, n4) {
//     if (n4 === 0){
//         return 'Error: Division by zero';
//     }
//     return n3 / n4
// }

// console.log(myDiv(5,0))


// function myExpo(n3, n4) {
//     if (n4 === 0){
//         return 'Error: Division by zero';
//     }
//     return n3 / n4
// }

// console.log(myDiv(5,0))

// var firstNum = 149
// var secNum = 200

// if(firstNum === 150) {
//     console.log("This is true")
// }else if(firstNum < 150){
//     console.log("Smaller than 150")
// }else if(firstNum > 150){
//     console.log("Greater than 150")
// }
// else{
//     console.log("This is the catcher")
// }

// for(var i =0; i < 100; i = 1 + 1){
//     console.log(i)
// } 

// for(var i = 100; i >= 1; i--){
//     console.log(i)
// }

//  for (var i = 0; i <= 100; i++){
//     if(i%2 != 0){
//         console.log(i)
//     }
// }


// let i = 0

// while (i <= 10) {
//     console.log(i)
//     i++
// }

// const body = document.body
// // body.append("Hello world", " Bye")
// const div = document.createElement("div")
// body.append(div)


// // div.innerText = "Hello world"

// // div.textContent = "<strong>Hello Worlds</strong>"

// // div.innerHTML = "<strong>Hello Worlds</strong>" HTML injection hindi na msyado ginagamit

// const strong = document.createElement("strong")
// strong.innerText = "Hello worlds"
// div.append(strong)
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")


// spanBye.remove()
// div.append(spanBye)

console.log(spanHi.getAttribute("Title"))
spanHi.setAttribute("id", "change-id")
// spanHi.removeAttribute("id")

console.log(spanHi.dataset)
spanHi.dataset.newName = "new name data"

spanHi.classList.add("new-class")
spanHi.classList.remove("hi1")
// spanHi.classList.toggle("hi1")
spanHi.style.color = "red"
spanHi.style.backgroundColor = "pink" 