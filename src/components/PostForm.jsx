
import React from "react";

const PostForm = () => {

const [post, setPost]=useState({title:'', body:''})
    return (

     <form>
     <MyInput 
       value={post.title}
       onChange={e => setPost({...post, title: e.target.value})}
       type="text"
       placeholder="post Name"
     />

     <MyInput 
       value={post.body}
       onChange={e => setPost({...post, body: e.target.value})}
       type="text" 
       placeholder="Post description"/>
     <MyButton onClick={addNewPost} >Create Post</MyButton>
   </form>

    );

};

export default PostForm;