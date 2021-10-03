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
import MyModal from './components/UI/modalwin/MyModal';
import { usePosts } from './hooks/usePost';


function App() {
  const [posts, setPosts] = useState([])
const [filter, setFilter] = useState({sort:'', query:''})
const [modal, setModal] = useState(false)
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)





  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton onClick={()=>setModal(true)} style={{marginTop: 30}}>
        create post?
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
       
      
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
