import { useHistory, useParams } from "react-router-dom";
import "../assets/styles/Editpage.css";
import { FaTrash, FaSave } from "react-icons/fa";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import DataContext, {DataProvider} from "../Context/ContextPostData/ContextPost";

const EditPage = () => {

    const {id} = useParams();
    const history = useHistory();
    const [HashtagsEdit, setHashtagsEdit] = useState("");
    const {Data, FetchError, isLoading} = useAxiosFetch(`http://localhost:3500/posts/${id}`)
    console.table(Data)

    const [Caption, setCaption] = useState(Data.body);
    const [HashtagsArray, setHashtagsArray] = useState([]);
    console.table(Data)



    const deletePost = async () => {
        console.log("Deleting...");
        try {
            await axios.delete(`http://localhost:3500/posts/${id}`);
        } catch (err) {
            console.log("Error : " + err);
        } finally {
            console.log("Request was ended ");
            history.push("/posts?msg=wasdeleted");
        }
    };

    const handleEdit = async () => {
        try {
            const updatedpost = {
                userId: 1,
                id: id,
                title: Caption,
                body: Caption + '  (Modfied)',
            };
            await axios.put(`http://localhost:3500/posts/${id}`, updatedpost);
            history.push('/posts?wasEditedSuccessFly')
        } catch (err) {
            console.log(err);
        }
    };

    const {title} = useContext(DataContext);


    return (
        <div className="editspace">
            <h4>Title : </h4>
            <h1>{title || 'Undefined'}</h1>
            <h5>Edit post with ID: {id}</h5>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">hashtags</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="#life #Sport"
                        value={HashtagsEdit}
                        onChange={(e) => {
                            const inputHashtags = e.target.value;
                            setHashtagsEdit(inputHashtags);
                            const hashtagsArray = inputHashtags
                                .split(" ")
                                .map((h) => {
                                    return `#${h}`;
                                });
                            setHashtagsArray(hashtagsArray);
                        }}
                    />
                </div>
                {HashtagsArray.map((tag, index) => (
                    <div key={index}>{tag}</div>
                ))}

                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Post caption</label>
                    <textarea
                        value={Caption}
                        onChange={(e) => setCaption(e.target.value)}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
            </form>

            <button className="btn" onClick={handleEdit} style={{color: "Green"}}>
                <FaSave/> Save
            </button>
            <button className="btn" onClick={() => deletePost()} style={{color: "Tomato"}}>
                <FaTrash/> Delete
            </button>
        </div>
    );
};

export default EditPage;
