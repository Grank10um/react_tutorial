
import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/button/input/MyInput";

const PostForm = ({create}) => {

    const [post, setPost] = useState({ title: '', body: '' })
    const addNewPost = (e) => {
        e.preventDefault() /* прерывание обновления странички */
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }
    return (

        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="post Name"
            />

            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Post description" />
            <MyButton onClick={addNewPost} >Create Post</MyButton>
        </form>

    );

};

export default PostForm;