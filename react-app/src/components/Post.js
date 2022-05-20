import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { grabPosts } from '../store/posts';
import { grabReplies } from '../store/replies';

import EditPost from "./EditPost";
import NewOutfitterPost from "./NewOutfitterPost/NewOutFitterPost";
import DeletePost from "./DeletePost/DeletePost"
import RepliesTimeline from "./RepliesTimeline/RepliesTimeline"

const PostsFeed = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => Object.values(state.posts))
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(grabPosts())
        dispatch(grabReplies())
    }, [dispatch])

    return (
        <>
            <div>
            <NewOutfitterPost />
            </div>
            <div>
            {posts.map((post, index) => (
                <div key={index}>
                <h1>{post.caption}</h1>
                <div>
                    {post.username}
                </div>
                <img src={post.photo_url} />
                {user.id === post.user_id && <EditPost post={post} />}
                {user.id === post.user_id && <DeletePost post={post}/>}
                <RepliesTimeline post={post}/>
                </div>
            ))}
            </div>
            <div>

            </div>

        </>

    )
}

export default PostsFeed
