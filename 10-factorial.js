const num = parseInt(process.argv[2]);

function factorial(n) {
    if (n < 2) {
        return 1;
    } else {
        return n * factorial(n - 1);    
    }
}

if (isNaN(num) ) {  
    console.log(1);
} else {                    
    console.log(factorial(num));
}