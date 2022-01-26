import React from 'react';
import { useState } from 'react/cjs/react.development';
import Mybutton from './UI/button/MyButton';
import Myinput from './UI/input/MyInput';

const Postform = ({createPost}) => {
  const [post, setPost] = useState({title: '', stack: ''})

  const addPost = (e)=> {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now()
    }
    createPost(newPost)
    setPost({title: '', stack: ''})
  }

  return (
    <form>
        <Myinput
          type="text"
          className='form-control'
          placeholder='Programming Launge'
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <Myinput 
           type="text"
           className='form-control my-3'
           placeholder='Enter your favorite stack'
           value={post.stack}
           onChange={e => setPost({...post, stack: e.target.value})}
        />
        <Mybutton onClick={addPost}>
          Add Item
        </Mybutton>
    </form>
  );
}

export default Postform;
