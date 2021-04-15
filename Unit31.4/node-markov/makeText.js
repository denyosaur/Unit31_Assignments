/** Command-line tool to generate Markov text. */

const fs = require("fs");
const process = require("process");
const axios = require("axios");
const markov = require("./markov");

class writeScript {
    constructor() {
        this.fileType = process.argv[2] === "text";
        this.fileSource = process.argv[3];
    }

    readFile(file) {
        fs.writeFile(file, "utf8", (err, data) => {
            if (err) {
                console.log("Error: ", err);
                process.exit(1);
            }
            writeFile(data)
        })
    }

    async readUrl(url) {
        try {
            const res = await axios.get(url);
            writeFile(res);
        }
        catch (err) {
            console.log("Error: Request failed with status code 404", err)
        }
    }

    writeFile(content) {
        let mmachine = new markov.MarkovMachine(content);
        console.log(mmachine.makeText())
    }
}

let fileType = process.argv[2] === "text";
let fileSource = process.argv[3];

function readFile(file) {
    fs.writeFile(file, "utf8", (err, data) => {
        if (err) {
            console.log("Error: ", err);
            process.exit(1);
        }
        writeFile(data)
    })
}

async function readUrl(url) {
    try {
        const res = await axios.get(url);
        writeFile(res);
    }
    catch (err) {
        console.log("Error: Request failed with status code 404", err)
    }
}

function writeFile(content) {
    let mmachine = new markov.MarkovMachine(content);
    console.log(mmachine.makeText())
}

if (fileType === "text") {
    readFile(fileSource);
} else if (fileType === "url") {
    readUrl(fileSource);
} else {
    console.log("Error: Incorrect File Type. Use url or text.")
}