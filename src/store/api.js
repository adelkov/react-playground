import axios from "axios";
import {urls} from "../constants";


export const createComment = comment => {
    return axios.post(urls.comments + ".json", comment);
};

export const createPost = post => {
    return axios.post(urls.posts + ".json", post);
};

export const fetchComments = () => {
    return axios.get(urls.comments + ".json");
};

export const fetchPosts = () => {
    return axios.get(urls.posts + ".json")
};

export const fetchPost = id => {
    return axios.get(urls.posts + "/" + id + ".json")
};

export const deletePost = id => {
    return axios.delete(urls.posts + "/" + id + ".json");
};

export const fetchMarkers = options => {
    return axios.get("")
};

export const fetchLeftovers = () => {
    return axios.get(urls.leftovers+".json")
};

export const createLeftover = leftover => {
    return axios.post(urls.leftovers+".json", leftover)
};


