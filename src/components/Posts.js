import Post from "../components/Post.js";
import "../assets/styles/Posts.css";
import axios from "../Api/axios.js";
import useAxiosFetch from "../hooks/useAxiosFetch";

const Posts = () => {
    //Custom hook
    const {Data, FetchError, isLoading} = useAxiosFetch("http://localhost:3500/posts");



    return (
        <div className="MainPosts">
            <div className="Options">Options</div>
            <div className="Posts">
                <h1>Posts available {Data.length} </h1>
                {isLoading && <p>Loading...</p>}
                {FetchError && <p style={{Color: "red"}}>{FetchError}</p>}
                {!isLoading && Data.map(item => (
                    <Post post={{
                        author: item.id === 1 ? 'Anonyme' : 'Lahcen',
                        caption: item.body,
                        hashtags:[item.hashtags] || ["Info", 'Power'],
                        Post_id: item.id
                    }}/>
                ))}
            </div>
            <div className="Friends">Friends</div>
        </div>
    );
};

export default Posts;
