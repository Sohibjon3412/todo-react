import React from 'react';
import TableHeader from './TableHeader';
import Tableitem from './TableItem';

const Tablelist = ({posts, title, removePost}) => {
  return (
    <div>
      <p className='text-center'>{title} </p>
      <table className="table table-striped">
          <TableHeader />
          <tbody>
            {
              posts.map((post, index) => (
                <Tableitem removePost={removePost} number={index + 1 } post={post} key={post.id}/>
              ))
            }
            
          </tbody>
      </table>
    </div>
  );
}

export default Tablelist;
