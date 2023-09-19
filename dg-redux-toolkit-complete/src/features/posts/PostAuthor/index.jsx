import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { selectAllUsers } from "../../users/usersSlice";

const PostAuthor = (props) => {
  const { userId } = props;

  const user = useSelector(selectAllUsers);

  const author = user.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unknown author"}</span>;
};

PostAuthor.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default PostAuthor;
