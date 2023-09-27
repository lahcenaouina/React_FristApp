// {
//     "userId": 1,
//     "id": 33,
//     "title": "Dont stop rzeq bi yadi lah",
//     "body": "Life is Life lalalalala ",
//     "Hashtags": [
// }
// "#Life"
// ]

import {useState} from "react";
import {useStoreActions} from 'easy-peasy';
export const AddPost = () => {
    const SavePost = useStoreActions((actions) => actions.SavePost)
    const [title, setTtitle] = useState('')
    const [Body, setBody] = useState('')
    const [Hashtags, setHashtags] = useState()
    return (
        <div className="container mt-5 p-5">
            <div className="row mt-5 ">
                <div className="col-md-8 col-md-offset-2">
                    <h1>Create post</h1>
                    <form>
                        <div className="form-group has-error">
                            <label htmlFor="slug">
                                title <span className="require">*</span>{" "}
                                <small>(This field use in url path.)</small>
                            </label>
                            <input type="text" className="form-control" onChange={(e) => setTtitle(e.target.value)} name="title"/>
                            <span className="help-block">Field not entered!</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">
                                Hashtags <span className="require">*</span>
                            </label>
                            <input type="text" className="form-control" onChange={(e) => setHashtags(e.target.value)} name="Hashtags"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">body</label>
                            <textarea
                                rows={5}
                                className="form-control"
                                name="description"
                                defaultValue={""}
                                onChange={(e) => setBody(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <p>
                                <span className="require">*</span> - required fields
                            </p>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                SavePost( {
                                    "userId": Math.floor(Math.random() * 135) ,
                                    "id": Math.floor(Math.random() * 135),
                                    "title": title,
                                    "body": Body,
                                    "Hashtags":[...Hashtags.split(' ').map(item => "#"+ item)]
                                })

                            }
                            }
                            >
                                Create
                            </button>
                            <button className="btn btn-default">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddPost;