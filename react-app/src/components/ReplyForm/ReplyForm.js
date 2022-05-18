import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addReply } from "../../store/replies";



const NewReply = () => {
    const dispatch = useDispatch()

    const [body, setBody] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newReply = {
            body
        }

        const response = await dispatch(addReply(newReply))
        if (response?.errors) {
            setErrors(response.errors)
        }
        }
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <input
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
