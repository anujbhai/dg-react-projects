import PropTypes from "prop-types";

import PostAuthor from "../PostAuthor";
import TimeAgo from "../TimeAgo";
import ReactionsBtn from "../ReactionsBtn";

const PostExcerpt = (props) => {
  const { post } = props

  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>

      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>

      <ReactionsBtn post={post} />
    </article>
  );
}

PostExcerpt.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
}

export default PostExcerpt;

