import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { grabPosts } from '../store/posts';

import EditPost from "./EditPost";

const PostsFeed = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => Object.values(state.posts))

    useEffect(() => {
        dispatch(grabPosts())
    }, [dispatch])

    return (
        <>
            <div>
            {posts.map((post, index) => (
                <>
                <h1 key={index}>{post.caption}</h1>
                <EditPost post={post} />
                </>
            ))}
            </div>
            <div>

            </div>

        </>

    )
}

export default PostsFeed
