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
                <div key={index}>
                <h1>{post.caption}</h1>
                <img src={post.photo_url} />
                <EditPost post={post} />
                </div>
            ))}
            </div>
            <div>

            </div>

        </>

    )
}

export default PostsFeed
