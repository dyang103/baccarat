import axios from 'axios';

export default class Jokes {

}

Jokes.getJoke = async () => {
    let res = await axios({
        method : 'get',
        url : 'https://official-joke-api.appspot.com/random_joke'
    });

    return res;
}