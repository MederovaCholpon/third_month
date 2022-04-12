    let line = '*';
    while (line.length<8){
        line = line+ '*';
        console.log(line);
    }

    // ******************

    for (let i = 0; i < 101; i++) {
        if (i % 3 === 0){
            console.log('FizzBuzz')
        }else if(i % 5 === 0 ){
            console.log('Fizz');
        }else{
            console.log(i)
        }
    }

