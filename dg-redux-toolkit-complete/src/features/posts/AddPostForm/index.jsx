import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "../postsSlice";
import { selectAllUsers } from "../../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch()
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers)

  const handleOnChangeTitle = (e) => setTitle(e.target.value);
  const handleOnChangeContent = (e) => setContent(e.target.value);
  const handleOnChangeAuthor = (e) => setUserId(e.target.value);

  const handleClickSavePost = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content, userId)
      )

      setTitle('')
      setContent('')
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>{user.name}</option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>

      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={handleOnChangeTitle}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={handleOnChangeAuthor}>
          <option value=""></option>
          {usersOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={handleOnChangeContent}
        />

        <button
          type="button"
          onClick={handleClickSavePost}
          disabled={!canSave}
        >Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
