import { useState } from 'react';
import './App.css'
import Postform from './components/PostForm';
import Tablelist from './components/TableList';


function App() {
  const [posts, setPosts] = useState([
    {id:1, title: "JavaScript", stack: 'Front-end'},
    {id:2, title: "Java", stack: 'Gaming'},
  ])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(s => s.id !== post.id))
  }

  return (
    <div className="App w-50 mx-auto">
      <Postform createPost={createPost}/>
      <Tablelist removePost={removePost} posts={posts} title="Programming Launge"/>
    </div>
  );
}

export default App;
