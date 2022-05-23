import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "reactjs-popup";

import { updateReply, removeReply } from "../../store/replies";
import './Replies.css'

const ReplyContainer = ({ reply }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const [newReply, setReply] = useState(reply.body);
  const [buttons, setButtons] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleEdit = async (e) => {
    e.preventDefault();

    const editedReply = {
      id: reply.id,
      reply: newReply,
    };

    let updated = await dispatch(updateReply(editedReply));
    if (updated.errors) {
      setErrors(updated.errors);
    }else{
        setButtons(false);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeReply(reply.id));
    setButtons(false);
  };

  const reveal = (e) => {
    buttons ? setButtons(false) : setButtons(true);
  };

  let replyButtons = (
    <div className ='reply-buttons'>
      <form>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <input
          type="text"
          value={newReply}
          onChange={(e) => setReply(e.target.value)}
        ></input>
        <button type="submit" onClick={handleEdit}>
          Edit
        </button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );

  return (
    <>
      <div className='each-reply'>
        <div className='reply'>
          <p>@{reply.username}</p>
          <p>{reply.body}</p>
        </div>
        {user.id === reply.user_id && (
          <div>
            <button onClick={reveal}> Reply Options</button>
            <Popup open={buttons}>{replyButtons}</Popup>
          </div>
        )}
      </div>
    </>
  );
};

export default ReplyContainer;
