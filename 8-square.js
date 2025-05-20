const num = parseInt(process.argv[2]);
if (isNaN(num)) {
    console.log('Missing sizer');
} else {
    for (let i = 0; i < num; i++) {
        console.log("X".repeat(num));
    }
}