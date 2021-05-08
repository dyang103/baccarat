import axios from 'axios';

export default class Ghibli {

}

Ghibli.getMovie = async () => {
    let res = await axios({
        method : 'get',
        url : 'https://ghibliapi.herokuapp.com/films',
    });

    return res;
}