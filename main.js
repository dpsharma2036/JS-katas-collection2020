
console.log('JS Katas2020')
let generateNodes = (type, text) => {
    let parent = document.createElement(type)
    let child = document.createTextNode(text)
    parent.appendChild(child)
    document.body.append(parent)
}

console.log('kata1');

// Display the numbers from 1 to 20.

generateNodes('h1', 'kata-num1:')

let num_list=[]

for (let i = 1; i<= 20; i ++){
    num_list.push(i)
}
generateNodes('p', num_list)

console.log('kata2');

// Display even numbers from 2 to 20.

generateNodes('h1','kata-num2:')

let even_list =[]
for (let i = 2; i <=20; i = i+2){
    even_list.push(i)
}
generateNodes('p', even_list)

console.log('kata3');
// Display the odd numbers form 1 to 20.
generateNodes('h1', 'kata-num3:')

let odd_list = []
for (let i = 1; i<=19; i = i+2){
    odd_list.push(i)
}
generateNodes('p', odd_list)

console.log('kata4');
// Displaythe multiple of 5 up to 100.

generateNodes('h1', 'kata-num4:')

let multiply_list =[]
for (let i = 5; i <=100; i = i+5){
    multiply_list.push(i)
}

generateNodes('p', multiply_list)

console.log('kata5');
// Display the square numbers from 1 up 100.

generateNodes('h1', 'kata-num5:')

let square_list =[]
for(let i = 1; i <=10; i ++){
    square_list.push(i * i)
}
generateNodes('p', square_list)

console.log('kata6');
// Display the numbers counting backwards form 20 to 1.

generateNodes('h1', 'kata-num6:')

let backwards_list = []

for(let i = 20; i >= 1; i --){
    backwards_list.push(i)
}

generateNodes('p', backwards_list)

console.log('kata7');
// Display the even numbers counting backwards from 20 t0 1.

generateNodes('h1', 'kata-num7:')

let even_backwards_list =[]
for(let i = 20; i >=1; i=i -2){
    even_backwards_list.push(i)
}
generateNodes('p', even_backwards_list)

console.log('kata8');
 //Display the odd numbers from 20 to 1.
generateNodes('h1', 'kata-num8:')
 let odd_backwards_list =[]

 for(let i = 20; i >=1; i=i-2 ){
     odd_backwards_list.push(i)
 }
 generateNodes('p', odd_backwards_list)

 console.log('kata9');
 //Display the multiples of 5, counting down from 100.

 generateNodes('h1', 'kata-num9:')

 let multiply_backwards_list = []

 for (let i = 100; i >= 1; i = i - 5){
     multiply_backwards_list.push(i)
 }
 generateNodes('p', multiply_backwards_list)

 console.log("kata10");
 // Display the square numbers, counting down  from 100 backwards

 generateNodes('h1', 'kata-num10:')

 let square_backwards_list = []

 for (let i = 10; i >= 1; i --){
     square_backwards_list.push(i * i)
 }
 generateNodes('p', square_backwards_list)

 console.log('kata11');
 // Display the 20 elements of sampleArray.(469,755,244...,940..)

 generateNodes('h1','kata-num11:')
let sampleArray_list= [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

for(let i = 0; i>sampleArray_list.length; i ++){
    sampleArray_list.push(sampleArray_list[i])
}

 generateNodes('p', sampleArray_list)


 