import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyInput from './components/UI/button/input/MyInput';
import MyButton from './components/UI/button/MyButton';
import "./styles/App.css"


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaSc', body: 'description'},
    {id: 2, title: 'Java2Sc', body: 'desc543ription'},
    {id: 3, title: 'Jav4aSc', body: 'descr534iption'},
    {id: 4, title: 'Jav3aSc', body: 'descrertgiption'},

  ]);

const [post, setPost]=useState({title:'', body:''})

const addNewPost = (e) => {
  e.preventDefault() /* прерывание обновления странички */
  setPosts([...posts, {...post, id: Date.now()}])
  setPost({title:'', body:''})
}

  return (
    <div className="App">
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
      <PostList posts={posts} title="Postlist1"/>  
    </div>
  );
};

export default App;
