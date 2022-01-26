import React from 'react';

const Tableitem = (props) => {
  return (
    <>
      <tr>
        <td>{props.number}</td>
        <td>{props.post.title}</td>
        <td>{props.post.stack}</td>
        <td>
          <button className='btn btn-outline-danger' onClick={()=> props.removePost(props.post)} >
            Delete
          </button>
        </td>
      </tr>
    </>
    
  );
}

export default Tableitem;
