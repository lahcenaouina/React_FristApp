import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../assets/styles/Post.css";
import { FaComment, FaShare, FaThumbsUp } from "react-icons/fa";

const Post = ({ post }) => {
  return (
    <div className="post-card">
      <p>
        <Link to={`posts/${post.Post_id}`}>Edit</Link>
      </p>
      {post.url ? <img className="post-image" src={post.url} alt="Post" /> : ""}
      <div className="post-info">
        <h2 className="username">{post.author}</h2>
        <p className="caption">{post.caption}</p>
        <ul className="hashtags">
          {post.hashtags.map((hashtag, index) => (
            <li key={index}>#{hashtag}</li>
          ))}
        </ul>
        <ul className="React-items">
          <li>
            <FaThumbsUp />
          </li>
          <li>
            <FaComment />
          </li>
          <li>
            <FaShare />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Post;
