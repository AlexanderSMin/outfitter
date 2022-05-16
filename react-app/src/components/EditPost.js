import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../store/posts";

const EditPost = ({ post }) => {
  const dispatch = useDispatch();

  const [caption, setCaption] = useState(post.caption);
  const [isEditClicked, setIsEditClicked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(updatePost(post.id, caption));

    setIsEditClicked(false);
  };

  useEffect(() => {
    setCaption(post.caption);
  }, [post]);

  let editForm = (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={caption}
      onChange={e => setCaption(e.target.value)}
    />
    <button type="submit">Submit</button>
  </form>
  )

  return (
    <div>
        <button onClick={() => setIsEditClicked(true)}>Edit</button>
      {isEditClicked && editForm}
    </div>
  );
};

export default EditPost;
