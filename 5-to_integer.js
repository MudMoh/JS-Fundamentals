//console.log("My number: " + parseInt(process.argv[2]));
// console.log("My number: " + parseInt(process.argv[2]) + 3);

const num = parseInt(process.argv[2]);
if (isNaN(num)) {
    console.log('Not a number');
} else {
    console.log('My number: ' + num);
}