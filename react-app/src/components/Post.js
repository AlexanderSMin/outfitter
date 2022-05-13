import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { grabPosts } from '../store/posts';

const PostsFeed = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => Object.values(state.posts))

    useEffect(() => {
        dispatch(grabPosts())
    }, [dispatch])

    return (
        <>
            <h1>Hello</h1>
            {posts.map((post, index) => (
                <h1 key={index}>{post.caption}</h1>
            ))}
        </>

    )
}

export default PostsFeed
