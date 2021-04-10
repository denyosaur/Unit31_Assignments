//Part 1 Number Facts

//callbacks
let url = "http://numbersapi.com/";
const faveNum = 27;
const faveNums = [27, 7, 3, 1]

//1.1.1
$.getJSON(`${url}${faveNum}?json`, (res) => {
    $(".111").append(`
        <li>#1. ${res.text}</li>
        `)
})

//1.1.2
$.getJSON(`${url}${faveNums}?json`, (res2) => {
    for (let pair in res2) {
        $(".112").append(`
        <li>${res2[pair]}</li>
        `)
    }
})

//1.1.3
let facts = [];
$.getJSON(`${url}${faveNum}?json`, (res) => {
    facts.push(res.text);
    $.getJSON(`${url}${faveNum}?json`, (res) => {
        facts.push(res.text);
        $.getJSON(`${url}${faveNum}?json`, (res) => {
            facts.push(res.text);
            $.getJSON(`${url}${faveNum}?json`, (res) => {
                facts.push(res.text);
                for (let text of facts) {
                    $(".113").append(`
                    <li>${text}</li>
                    `)
                }
            })
        })
    })
})

//Promises
//1.2.1
$.getJSON(`${url}${faveNum}?json`)
    .then(res => {
        $(".121").append(`
        <li>#1. ${res.text}</li>
        `)
    })


//1.2.2
$.getJSON(`${url}${faveNums}?json`)
    .then(res2 => {
        for (let pair in res2) {
            $(".122").append(`
        <li>${res2[pair]}</li>
        `)
        }
    });

//1.2.3
function promisedArr() {
    let promiseArr = [];
    for (i = 0; i < 4; i++) {
        $.getJSON(`${url}${faveNum}?json`)
            .then(res3 => { promiseArr.push(res3.text) });
    };
    return promiseArr;
}


Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${url}${faveNum}?json`);
    })
)
    .then(arr => (
        arr.forEach(p => {
            $(".123").append(`
            <li>${p.text}</li>
            `)
        })
    ))
