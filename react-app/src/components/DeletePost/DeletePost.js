import { React } from 'react';
import { useDispatch } from "react-redux";

import { removePost } from '../../store/posts';


const DeletePost = ({ post }) => {
    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(removePost(post.id))
    }

    return(
        <div>
            <button type='submit' onClick={handleDelete}> Delete Post</button>
        </div>
    )
}

export default DeletePost
