import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/posts";

import './NewOutFitterPost.css'

const NewOutfitterPost = () => {
    const dispatch = useDispatch()

    const [caption, setCaption] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newPost = {
            caption,
            photoUrl
        }

        const response = await dispatch(addPost(newPost))
        if (response?.errors) {
            setErrors(response.errors)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    placeholder='New Outfitter Post'
                    onChange={(e) => setCaption(e.target.value)}
                    value={caption}
                ></input>
            </div>
            {/* <div>
                    <input
                        placeholder='Photo Link'
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        value={photoUrl}
                    ></input>
                </div> */}
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default NewOutfitterPost
