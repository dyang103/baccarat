import axios from 'axios';

export default class Quotes {

}

Quotes.getQuote = async () => {
    let res = await axios({
        method : 'get',
        url : 'https://goquotes-api.herokuapp.com/api/v1/random?count=1',
        headers : {
            'Accept' : 'application/json'
        },
    })

    return res;
}