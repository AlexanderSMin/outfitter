const GET_POSTS = 'post/GET_POSTS';
const CREATE_POST = 'post/ADD_POST';
const EDIT_POST = 'post/EDIT_POST';
const DELETE_POST = 'post/DELETE_POST';

const getPosts = (posts) => ({
    type: GET_POSTS,
    posts
})

const createPost = (post) => ({
    type: CREATE_POST,
    post
})

const editPost = (post) => ({
    type: EDIT_POST,
    post
})

const deletePost = (id) => ({
    type: DELETE_POST,
    id
})

export const grabPosts = () => async (dispatch) => {
    const response = await fetch('api/posts/');
    if(response.ok){
        const posts = await response.json();
        dispatch(getPosts(posts));
    }
}

export const addPost = (post) => async (dispatch) => {
    const response = await fetch('/api/posts/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
    if(response.ok){
        const newPost = await response.json();
        dispatch(createPost(newPost))
    }
}

export const updatePost = (id, caption) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}/`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({caption})
    });
    if (response.ok) {
        const updatedPost = await response.json();
        dispatch(editPost(updatedPost));
    }
}

export const removePost = (id) => async (dispatch) => {
    const response = await fetch(`api/posts/${id}/delete/`, {
      method: "DELETE"
    });
    if (response.ok) {
      dispatch(deletePost(id));
    }
}

const initialState = {};

export default function PostReducer(state = initialState, action) {
    let newState
    switch (action.type) {
        case GET_POSTS:
            newState = {}
            action.posts.posts.forEach(post => { newState[post.id] = post})
            return newState
        case CREATE_POST:
            newState = { ...state }
            newState[action.post.id] = action.post
            return newState
        case EDIT_POST:
                newState = {...state}
                newState[action.post.id] = action.post
            return newState
        case DELETE_POST:
                newState = {...state}
                delete newState[action.id]
            return newState
        default:
            return state;
    }
}
