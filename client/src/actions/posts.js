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
        const { data } = await api.createPost(post); 
        dispatch ({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    
    }
}

export const updatePost = (id , post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post); 
        dispatch ({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch ({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
}


export const likeCount = (id) => async (dispatch) => {
    try {
      await api.likeCount(id);
      dispatch ({ type: 'LIKE', payload: id });
      console.log('likeCount');
    } catch (error) {
       console.log(error);
    }
}