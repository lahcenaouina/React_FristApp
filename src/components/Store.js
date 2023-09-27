import {action, computed, createStore, thunk} from 'easy-peasy';
import axios from "axios";


export default createStore({
    Posts: [],
    setPosts: action((state, payload) => {
        state.Posts = payload;
    }),
    PostsCounter: computed(state => state.Posts.length),
    Title: "",
    setTitle: action((state, payload) => {
        state.Posts = payload;
    }),
    Body: "",
    setBody: action((state, payload) => {
        state.Posts = payload;
    }),
    SavePost: thunk(async (action, NewPost, Helppers) => {
        const {Posts} = Helppers.getState();

        try {
            let response = await axios.post('http://localhost:3500/posts', NewPost);
            action.setPosts([...Posts, response.data]);
            console.log(response.data)

        } catch (e) {
            console.log(e)
        }
    }) ,
    DeletePost : thunk ( (state , id , helpers) => {
        const { posts } = helpers.getState();
        try {
            axios.delete(`http://localhost:3500/posts/${id}`)
            action.setPosts(posts.filter(item => item.id !== id ))

        } catch (e) {
            console.log(e.message())
        }
    })

})