const spring = ['march', 'april', 'may'];
const summer = ['june', 'july', 'august'];
const autumn = ['september', 'october', 'november'];
const winter = ['december', 'january', 'february'];
const weather = ['warm', 'hot', 'cold'];

const seasons = [...spring, ...summer, ...autumn,
                 ...winter, ...weather];
console.log(seasons);

//************************************

const obj = {
    spring: "april",
    summer: "juli",
    autumn: "september",
    winter: "january",
    weather: "warm"
}

const obj2 = {
    ...obj,
    year: "2022",
    month: "april",
    day: "27"
}
console.log(obj2)

//**************************************

let elem = document.querySelector('input');
elem.addEventListener('focus', function (){
    elem.placeholder = "";
});

button.onclick = function() {
    let val = document.getElementById('elem').value;
    document.getElementById('str').innerHTML="Hello "+val;
};





