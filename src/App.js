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

  const [title, setTitle] =useState('')
  const bodyInputRef = useRef(); 

const addNewPost = (e) => {
  e.preventDefault()
  console.log(title)
  {/*console.log(bodyInputRef.current.value)  метод с хуком юзреф*/} 

}

  return (
    <div className="App">
      <form>
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="post Name"
        />
       {/*} <input ref={bodyInputRef} type="text" /> обращение к любому дом елементу*/}


        <MyInput type="text" placeholder="Post description"/>
        <MyButton onClick={addNewPost} >Create Post</MyButton>
      </form>
      <PostList posts={posts} title="Postlist1"/>  
    </div>
  );
};

export default App;
