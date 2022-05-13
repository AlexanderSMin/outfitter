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
    payload: post
})

const editPost = (post) => ({
    type: EDIT_POST,
    payload: post
})

const deletePost = (post) => ({
    type: DELETE_POST,
    payload: post
})

export const grabPosts = () => async (dispatch) => {
    const response = await fetch('api/posts/');
    if(response.ok){
        const posts = await response.json();
        dispatch(getPosts(posts));
    }
}

export const addPost = (post) => async (dispatch) => {
    const response = await fetch('api/posts/new', {
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

export const updatePost = (post) => async (dispatch) => {
    const response = await fetch(`/api/posts/${post.id}/edit/`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
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
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        default:
            return state;
    }
}
