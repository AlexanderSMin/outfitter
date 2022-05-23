import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { grabPosts } from '../store/posts';
import { grabReplies } from '../store/replies';

import EditPost from "./EditPost";
import NewOutfitterPost from "./NewOutfitterPost/NewOutFitterPost";
import DeletePost from "./DeletePost/DeletePost"
import RepliesTimeline from "./RepliesTimeline/RepliesTimeline"
import "./Post.css"

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
            <div className= 'header'>
                <h1>My Outfitter Timeline</h1>
                <NewOutfitterPost className="newPost-form" />
            </div>
            <div className='post-timeline'>
                <ul className="timeline-container">
                    {posts.map((post, index) => (
                        <div className='individual-post' key={index}>
                            <div className='caption'>
                                {post.caption}
                            </div>
                            <div>
                                {post.username}
                            </div>
                            <img src={post.photo_url} />
                            <div>
                            {user.id === post.user_id && <EditPost post={post} />}
                            </div>

                            {user.id === post.user_id && <DeletePost post={post} />}
                            <RepliesTimeline post={post} />
                        </div>
                    ))}
                </ul>
            </div>
            <div>

            </div>

        </>

    )
}

export default PostsFeed
