import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchPosts,
  getPostError,
  getPostStatus,
  selectAllPosts,
} from "../postsSlice";
import PostExcerpt from "../PostExcerpt";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostStatus);
  const error = useSelector(getPostError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;

  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = orderedPosts.map((post) => <PostExcerpt key={post.id} post={post} />)
  } else if (postsStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h2>Posts</h2>

      {renderedPosts}
    </section>
  );
};

export default PostsList;
