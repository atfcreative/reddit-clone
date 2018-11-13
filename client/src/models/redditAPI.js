import axios from "axios";
const baseURL = 'http://localhost:5000/api/posts';

class redditAPI {
    static index = () => axios.get(baseURL);

    static show = id => axios.get(baseURl + id);

    static create = TextPost => axios.post(baseURL, post);

    static update = TextPost => axios.put(baseURL, post);

    static destroy = id => axios.delete(baseURL + id);
}

export default redditAPI;