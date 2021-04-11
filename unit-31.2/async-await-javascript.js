class Numbers {
    constructor() {
        this.faveNum = 27;
        this.faveNums = [3, 9, 27];
        this.url = "http://numbersapi.com"
    }

    async getFaveNum() {
        let res = await axios.get(`${this.url}/${this.faveNum}?json`);
        $(".answers131").append(`
            <li>${res.data.text}</li>
            `)
    }

    async getFaveNums() {
        let res = await axios.get(`${this.url}/${this.faveNums}?json`);
        for (let pair in res.data) {
            $(".answers132").append(`
            <li>${res.data[pair]}</li>
            `)
        }
    }

    async get4Facts() {
        let numFacts = await Promise.all([
            axios.get(`${this.url}/${this.faveNum}?json`),
            axios.get(`${this.url}/${this.faveNum}?json`),
            axios.get(`${this.url}/${this.faveNum}?json`),
            axios.get(`${this.url}/${this.faveNum}?json`)
        ])

        for (let i = 0; i < numFacts.length; i++) {
            $(".answers133").append(`
            <li>${numFacts[i].data.text}</li>
            `)
        }
    }

    loadNumberAnswers() {
        this.getFaveNum()
        this.getFaveNums()
        this.get4Facts()
    }
}

let numbers = new Numbers();

$(document).ready(
    numbers.loadNumberAnswers()

)