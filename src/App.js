import React, {useMemo, useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MyButton from './components/UI/button/MyButton';
import MySelect from './components/UI/select/MySelect';
import "./styles/App.css"
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'd', body: 'n' },    
    { id: 2, title: 'a', body: 'd' },    
    { id: 3, title: 'b', body: 'p' },
    { id: 4, title: 'q2Sc', body: '43' },
  ])

const [filter, setFilter] = useState({sort:'', query:''})

const sortedPosts = useMemo(()=>{
  console.log("usememi works!")
  if (filter.sort) {
    return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
  } 
    return posts;
}, [filter.sort, posts])

const sortedAndSearchedPosts = useMemo(()=>{
  return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query))
}, [filter.query, sortedPosts])



  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyModal>      
       asdswdedfcwD
      </MyModal>
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter} 
        setFilter={setFilter}
        />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Postlist1" />
    </div>
  );
}

export default App;
