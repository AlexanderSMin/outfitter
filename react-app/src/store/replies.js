const GET_REPLIES = 'post/GET_REPLIES';
const CREATE_REPLY = 'post/ADD_REPLY';
const EDIT_REPLY = 'post/EDIT_REPLY';
const DELETE_REPLY = 'post/DELETE_REPLY';

const getReplies = (replies) => ({
    type: GET_REPLIES,
    replies
})

const createReply = (reply) => ({
    type: CREATE_REPLY,
    reply
})

const editReply = (reply) => ({
    type: EDIT_REPLY,
    reply
})

const deleteReply = (id) => ({
    type: DELETE_REPLY,
    id
})

export const grabReplies = () => async (dispatch) => {
    const response = await fetch('api/replies/');
    if(response.ok){
        const replies = await response.json();
        dispatch(getReplies(replies));
    }
}

export const addPost = (post) => async (dispatch) => {
    const {caption, photoUrl} = post
    const response = await fetch('/api/posts/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            caption,
            photo_url : photoUrl
        })
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
