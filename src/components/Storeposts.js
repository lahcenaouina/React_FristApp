import '../assets/styles/StylePosts.css'
import useAxiosFetch from "../hooks/useAxiosFetch";
import {useEffect} from "react";
import {useStoreActions, useStoreDispatch, useStoreState} from "easy-peasy";


const Storeposts = () => {

    const Posts = useStoreState((state) => state.Posts)
    const setPosts = useStoreActions((actions) => actions.setPosts);
    const {Data, isLoading, FetchError} = useAxiosFetch("http://localhost:3500/posts")
    
    useEffect(() => {
        setPosts(Data)
    }, [Data, setPosts])
    return (
        <div className='Page'>
            <h1>StorePosts</h1>
            <h6>Post Come from Redux Container </h6>
            <pre>

            {isLoading ? "Loading..." :JSON.stringify(Posts , 5 , 5)}
            </pre>
        </div>
    )
}

export default Storeposts;