import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from 'reactjs-popup'

import { updateReply, removeReply } from '../../store/replies'


const ReplyContainer = ({ reply }) => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)

    const [newReply, setReply] = useState(reply.body)
    const [buttons, setButtons] = useState(false)
    const [errors, setErrors] = useState([])

    const handleEdit = async (e) => {
        e.preventDefault();

        const editedReply = {
            id: reply.id,
            reply: newReply
        }

        let updated = await dispatch(updateReply(editedReply))
        if (updated.errors) {
            setErrors(updated.errors)
        }
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(removeReply(reply.id))
    }

    const reveal = (e) => {
        buttons ? setButtons(false) : setButtons(true)
    }

    let replyButtons = (
        <div>
            <ul>
                {errors?.map((error, idx) =>
                    <li key={idx}>{error}</li>
                )}
            </ul>
            <form>
                <input
                    type="text"
                    value={newReply}
                    onChange={(e) => setReply(e.target.value)}
                >
                </input>
                <button type="submit" onClick={handleEdit}>Edit</button>
            </form>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )

    return (
        <>
            <div>
                <div>
                    <p>
                        @{reply.username}
                    </p>
                    <p className="user-comment">
                        {comment.body}
                    </p>
                </div>
                {user.id === reply.user_id &&
                    <div>
                        <button onClick={reveal}></button>
                        <Popup open={buttons}>
                            {replyButtons}
                        </Popup>
                    </div>
                }
            </div>
        </>
    )
}

export default ReplyContainer
