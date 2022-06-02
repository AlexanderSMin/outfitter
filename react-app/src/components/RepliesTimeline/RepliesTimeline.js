import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ReplyContainer from '../ReplyContainer/ReplyContainer';
import ReplyForm from '../ReplyForm/ReplyForm';
import './RepliesTimeline.css'

const RepliesTimeline = ({ post }) => {
	const dispatch = useDispatch();
	const replies = useSelector(state => Object.values(state.replies))

	// useEffect(() => {
	// 	dispatch(grabReplies())
	// }, [dispatch])

	return (
		<div className='reply-div'>
			{replies.length > 0 &&
				<>
					<h3 className='replies-title'>Replies:</h3>
					<ul className='replies-timeline'>
						{replies.map(reply => {
							if (reply.post_id === post.id) {
								return (
									<li key={reply.id}>
										<ReplyContainer reply={reply} />
									</li>
								)
							}
						}
						)}
					</ul>
				</>
			}
			<ReplyForm post={post} />
		</div>
	)
}

export default RepliesTimeline
