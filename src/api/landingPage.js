import axios from "axios";
import {FETCH_DOGS_LIST, FETCH_BREED} from "../config/URL";

const fetchDogsList = () => {
    return axios
        .get(FETCH_DOGS_LIST)
        .then(response => response.data);
};

const fetchBreed = (params) => {
    return axios
        .get(FETCH_BREED + params.breed + '/images')
        .then(response => response.data);
};

export {fetchDogsList, fetchBreed};
