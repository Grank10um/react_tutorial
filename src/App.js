import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostItem from './components/PostItem';
import "./styles/App.css"


function App() {
  const [value, setValue] = useState('text in input');

  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'JavaSc', body: 'description'}} />
    </div>
  );
};

export default App;
