// 1 Check prime 
// How would you verfiy a prime number? 
// a prime number is only divisible by itself and 1.
// return false if not prime

function isPrime(num) {
    num = Math.round(num);
    // check if even number
    if ((num%2 === 0 && num!==2) || num<2){
        return false  
    }
    if (!Number.isInteger(num)){
        console.log('not a number')
        return
    }
    //check odd numbers with loop
    else {
        for (let i = 3; i < num; i++) {
            console.log(i + ' is the divisor')
            if (num%i === 0) {
                console.log(num + ' is not prime')
                return false
            }
        }
    }
    return true;
}

console.log(isPrime(1.0001));