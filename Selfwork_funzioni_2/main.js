
function stampaNumeri(n) {

    for (let i = 1; i <= n; i++) {

        let risultato = '';

        if (i % 15 == 0) {
            risultato = 'FizzBuzz';

        } else if (i % 3 == 0) {
            risultato = 'Fizz';

        } else if (i % 5 == 0) {
            risultato = 'Buzz';

        } else {
            risultato = i;
        }

        console.log(risultato);
    }
}

stampaNumeri(25);