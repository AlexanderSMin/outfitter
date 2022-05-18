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
    const response = await fetch(`/api/replies/`);
    if(response.ok){
        const replies = await response.json();
        dispatch(getReplies(replies));
    }
}

export const addReply = (id, reply) => async (dispatch) => {
    const { body } = reply
    const response = await fetch('/api/replies/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            post_id: id,
            body
        })
    });
    if(response.ok){
        const newReply = await response.json();
        dispatch(createReply(newReply))
    }
}

export const updateReply = (id, body) => async (dispatch) => {
    const response = await fetch(`/api/replies/${id}/`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ body })
    });
    if (response.ok) {
        const updatedReply = await response.json();
        dispatch(editReply(updatedReply));
    }
}

export const removeReply = (id) => async (dispatch) => {
    const response = await fetch(`api/replies/${id}/delete/`, {
      method: "DELETE"
    });
    if (response.ok) {
      dispatch(deleteReply(id));
    }
}

const initialState = {};

export default function ReplyReducer(state = initialState, action) {
    let newState
    switch (action.type) {
        case GET_REPLIES:
            newState = {}
            action.replies.replies.forEach(reply => { newState[reply.id] = reply })
            return newState
        case CREATE_REPLY:
            newState = { ...state }
            newState[action.reply.id] = action.reply
            return newState
        case EDIT_REPLY:
                newState = {...state}
                newState[action.reply.id] = action.reply
            return newState
        case DELETE_REPLY:
                newState = {...state}
                delete newState[action.id]
            return newState
        default:
            return state;
    }
}
