import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
// import CommentList from './CommentList';

const CommentForm = () => {
  // const [list, setList] = useState([]);
  // const name = useRef(null);
  // const content = useRef(null);

  // const addList = () => {
  //   const list_data = {
  //     name: name.current.value,
  //     content: content.current.value,
  //   };

  //   // console.log(list_data);
  //   setList([...list, list_data]);

  //   name.current.value = '';
  //   content.current.value = '';
  // };
  return (
    <div>
      <div>
        <span>닉네임</span>
        <input type='text' />
        <span>댓글</span>
        <textarea name='' id='' cols='30' rows='5' ref={content}></textarea>
        <button>취소</button>
        <button onClick={addList}>작성</button>
      </div>
    </div>
  );
};

export default CommentForm;
