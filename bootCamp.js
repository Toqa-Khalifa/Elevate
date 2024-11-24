/*Filtration Task for Problem Solving BootCamp

Write a Function that take 2 integergers (n,m) then print all prime numbers between them

Note: you can implement the task with any language you prefer like (c++,dart,js) 
Input
The input consists of two integers n and m (1≤n≤1000000) and n always less than m
Output
Print all prime numbers

Examples
Input: 5 10
output : 7

Input: 7 20
Output: 11 13 17 19
 */
////////////////////////////////Answer////////////////////////////////////////////
function findPrimes(n, m) {
    let primes = "";

    for (let num = n; num <= m; num++) {
        let isPrime = true;

        if (num > 1) { 
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false; 
                    break; 
                }
            }
            if (isPrime) {
                primes += num + " "; 
            }
        }
    }

    console.log(primes.trim()); 
}

findPrimes(5, 10); 
findPrimes(7, 20); 

