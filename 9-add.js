const num_1 = parseInt(process.argv[2]);
const num_2 = parseInt(process.argv[3]);

function add(a, b) {
    return a + b;
}
if (isNaN(num_1) || isNaN(num_2)) {
    console.log('NaN');
} else {
    console.log(add(num_1, num_2));
}

