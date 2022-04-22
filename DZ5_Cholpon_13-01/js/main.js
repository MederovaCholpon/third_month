const rainbows = document.querySelectorAll('.rainbow');
console.log(rainbows)


const color = prompt('Выберите цвет светaфора?')
switch (color) {
     case 'red':
        document.querySelector('#colorRed').style.backgroundColor = 'red';
        console.log('STOP!')
        break;

    case 'yellow':
        document.querySelector('#colorYellow').style.backgroundColor = 'yellow';
        console.log('SLOW!')
        break;

    case 'green':
        document.querySelector('#colorGreen').style.backgroundColor = 'green';
        console.log('GOO!')
        break;

    default:
        console.log('NO WORK!')
        break;
}

