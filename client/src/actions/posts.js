import * as api from '../api';

api.fetchPosts(); // this will return a promise

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(); // this will return a promise
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.creatPost(post); 
        dispatch ({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}