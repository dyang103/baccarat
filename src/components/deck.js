import axios from 'axios';

export default class Deck{

}

Deck.getDeck = async () => {
    let res = await axios({
        method : 'get',
        url : 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
    });

    return res;
}

Deck.draw = async (id, count) => {
    let res = await axios({
        method : 'get',
        url : 'https://deckofcardsapi.com/api/deck/' + id + '/draw/?count=' + count,
    });

    return res;
}