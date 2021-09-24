import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import "./styles/App.css"


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaSc', body: 'description'},
    {id: 2, title: 'Java2Sc', body: 'desc543ription'},
    {id: 3, title: 'Jav4aSc', body: 'descr534iption'},
    {id: 4, title: 'Jav3aSc', body: 'descrertgiption'},

  ]);

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'JasdfsvaSc', body: 'description'},
    {id: 2, title: 'sdf', body: 'desc543ription'},
    {id: 3, title: 'Jav4sfrewfsaSc', body: 'descr534iption'},
    {id: 4, title: 'Javwerfdw3aSc', body: 'descrertgiption'},

  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Postlist1"/>
      <PostList posts={posts2} title="Postlistdsf1"/>    
    </div>
  );
};

export default App;
