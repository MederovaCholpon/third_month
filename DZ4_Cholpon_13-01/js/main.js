let nums = document.querySelectorAll('.counter_num');
    nums.forEach(num=>{
    num.addEventListener('click', function (){
    let direction = this.dataset.direction;
    let inp = this.parentElement.querySelector('#input');
    let current_value = +inp.value;
    let newValue;

    if (direction ==='plus'){
        newValue = current_value +1;
    }else {
        newValue = current_value -1>0? current_value -1:0;
    }
    inp.value = newValue;
    })
})
