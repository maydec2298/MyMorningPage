import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CommentList from './CommentList';

const CommentForm = () => {
  const [inputName, setInputName] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [todoList, setTodoList] = useState([]);
  const useDispatch = useDispatch();

  // 닉네임 값 받는 핸들러
  const onChangeHandler = (event) => {
    const inputNameValue = event.target.value;
    setInputName(inputNameValue);
  };
  // 내용 값 받는 핸들러
  const onChangeHandler2 = (event) => {
    const inputContentValue = event.target.value;
    setInputContent(inputContentValue);
  };
  // 코멘트 추가버튼 핸들러
  const addItem = () => {
    setTodoList([...todoList, inputName, inputContent]);
  };
  return (
    <div>
      <div>
        <label htmlFor='userName'>닉네임</label>
        <input type='text' id='userName' name='userName' value={inputName} onChange={onChangeHandler} />
      </div>
      <div>
        <label htmlFor='content'>댓글</label>
        <textarea id='content' name='content' value={inputContent} onChange={onChangeHandler2} />
      </div>
      <div>
        <button>취소</button>
        <button onClick={addItem}>작성</button>
      </div>
      <CommentList todoList={todoList} />
    </div>
  );
};

export default CommentForm;
