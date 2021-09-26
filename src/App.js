import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyInput from './components/UI/button/input/MyInput';
import MyButton from './components/UI/button/MyButton';
import "./styles/App.css"


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaSc', body: 'description' },
    { id: 2, title: 'Java2Sc', body: 'desc543ription' },
  ]);

const createPost = (newPost) => {
  setPosts([...posts, newPost])
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !==post.id))
}

  return (
    <div className="App">
      <PostForm create={createPost} />
      {
        posts.length !==0
        ? <PostList remove={removePost} posts={posts} title="Postlist1" />
        : <h1 style={{textAlign: 'center'}}>
          Pusto!
          </h1>
      }
      
    </div>
  );
};

export default App;
