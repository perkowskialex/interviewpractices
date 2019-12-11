// verify a prime a number 
// write a function that return true if a number is prime 
// return false is not prime 
// prime is only divisable by itself and 1 

// function prime(n1) {
//     if(n1 % 2 )
// }

function isPrime(num) {

    if (num === 2) {
      return true;
    }
    else if(num > 1){
      for (var i = 2;  i < num; i++) {
  
        if (num % i !== 0 ) {
          return true;
        }
  
        else if (num === i * i) {
          return false
        }
  
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  
  }

  console.log(isPrime(11))