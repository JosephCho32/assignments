const fs = require("fs");
var file;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
var array = fs.readFileSync('filenames.txt', 'utf8').split(', \n');

setTimeout(()=>{
    readline.question("File Name?\n", (filename) => {
        readline.close();
        if (array.includes(filename+".txt")) {
            console.log("Already in use. Run program again and choose another file name.");
        } else {
            file = filename;
            readline.close()
            fs.appendFile("./filenames.txt", file + ".txt, \n", ()=>{
                console.log(file +".txt added to database");
                fs.readFile("./filenames.txt", "utf-8", (err, data)=>{
                    console.log(data);
                });
            });
            fs.writeFile("./" + file + ".txt", "You are awesome", ()=>{
                console.log("File Created...");
                fs.readFile("./" + file + ".txt", "utf-8", (err, data)=>{
                    console.log(data);
                });
            });
        }
    })
}, 0);

// const argv = require('yargs').argv
// console.log(argv[0])