//TODO when rahul finishes python script, add python script here 
//If you want to extract arguments in python use sys.argv[argument number]
//Also the python script should have something like print(0 or 1 depending on if it was successful) and then after that sys.stdout.flush()

const spawn = require("child_process").spawn;
function extractaudio(file_input, file_output) {
    const python_process = spawn("python", ["extractaudio.py", file_input, file_output]); //TODO add file to take in as argument or some stuff like that
    python_process.stdout.on('data', (data) => {
        if (data.toString() == "0") { //TODO if there is a toint function, use that instead, i don't have intellisense right now :(
            return 0;
        }
        else {
            return 1;
        }
    });
}
function trimaudio(filetotrim) {
    const python_process = spawn("python", ["trim.py", filetotrim]);
    python_process.stdout.on('data', (data) => {
        if (data.toString() == "0") { //TODO if there is a toint function, use that instead, i don't have intellisense right now :(
            return 0;
        }
        else {
            return 1;
        }
    });
}
function reductnoise(filepath) {
    const python_process = spawn("python", ["main.py", filepath]);
    python_process.stdout.on('data', (data) => {
        if (data.toString() == "0") { //TODO if there is a toint function, use that instead, i don't have intellisense right now :(
            return 0;
        }
        else {
            return 1;
        }
    });
}
module.exports = {
    extractaudio,
    trimaudio,
    reductnoise
}

