import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MyButton from './components/UI/button/MyButton';
import MySelect from './components/UI/select/MySelect';
import "./styles/App.css"


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'd', body: 'n' },    
    { id: 2, title: 'a', body: 'd' },    
    { id: 3, title: 'b', body: 'p' },
    { id: 4, title: 'q2Sc', body: '43' },
  ])

const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

const sortPosts = (sort) => {
  setSelectedSort(sort);
  setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
}

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="sortirovka"
          options={[
            {value: 'title', name: 'Po nazvanijy' },
            {value: 'body', name: 'Po opisanijy' },
          ]}
        />
      </div>


      {
        posts.length !== 0
          ? <PostList remove={removePost} posts={posts} title="Postlist1" />
          : <h1 style={{ textAlign: 'center' }}>
            Pusto!
          </h1>
      }

    </div>
  );
};

export default App;
