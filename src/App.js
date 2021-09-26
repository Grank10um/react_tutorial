import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import "./styles/App.css"


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaSc', body: 'description'},
    {id: 2, title: 'Java2Sc', body: 'desc543ription'},
    {id: 3, title: 'Jav4aSc', body: 'descr534iption'},
    {id: 4, title: 'Jav3aSc', body: 'descrertgiption'},

  ]);



  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Post name"/>
        <input type="text" placeholder="Post description"/>
        <MyButton disabled>Create Post</MyButton>
      </form>
      <PostList posts={posts} title="Postlist1"/>  
    </div>
  );
};

export default App;
