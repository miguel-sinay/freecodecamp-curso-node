console.log(process.platform)
console.log(process.env)
console.log(process.argv)
// [node, app.js, 6, 7]
//   0      1     2  3
console.table(process.argv)
for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i])
}