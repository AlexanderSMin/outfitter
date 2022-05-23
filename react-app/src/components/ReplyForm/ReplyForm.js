import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addReply } from "../../store/replies";

import './ReplyForm.css';

const NewReply = ({ post }) => {
    const dispatch = useDispatch()

    const [body, setBody] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newReply = {
            body
        }

        const response = await dispatch(addReply(post.id, newReply))
        if (response?.errors) {
            setErrors(response.errors)
        }else{
            setBody("")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <div className='reply-placeholder'>
                <input id='reply-placeholder'
                    placeholder='Reply'
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                ></input>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default NewReply
