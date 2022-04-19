// function sayHello() {
//     console.log("Hello")
// }
//
// sayHello();
//
// function getFulName(user, age, user2) {
//     if (age < 18){
//         console.log(user. first_name, user.last_name)
//     }
// }
//
// const user = {
//     first_name: "John",
//     last_name: "Barbaro"
// }
//
// const user2 = {
//     first_name: "Vito",
//     last_name: "Scalette"
// }
//
// getSelection(user, 15);
// getSelection(user2, 19);

// const anonym = function (user) {
//     console.log(user.first_name, user.last_name)
// }
// anonym();

function element (x, y) {
    console.log(x, y)
    if (x<y) {
        console.log('x больше чем y');
    }else {
        console.log('y больше чем x')
    }
}
const x = {
    x: 3,
    y: 5
}
element (x)

//******************

function twoMass(arr, age) {
    if (arr.length > age.length){
        console.log('arr больше чем age')
    }else {
        console.log('age больше чем arr')
    }
}
const arr = [1, 2, 3]
const age = [17, 56, 32, 45, 64]

twoMass(arr, age)

