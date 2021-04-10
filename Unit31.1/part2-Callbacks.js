let deckId = "";
let url = "https://deckofcardsapi.com/api/deck";

$(document).ready(() => {
    $.getJSON(`${url}/new/shuffle/?deck_count=1`, (res) => {
        deckId = res.deck_id;
    });
});


$(".give-card").click((evt) => {
    evt.preventDefault();
    $.getJSON(`${url}/${deckId}/draw/?count=1`, (res) => {
        $(".new-cards").append(`
            <li><img src="${res.cards[0].image}" alt=""></li>
            `);
    });
});