import React from 'react';
import styled from 'styled-components';
// import CommentList from './CommentList';

const Comment = (props) => {
  return <CommentStyle>{props.item}</CommentStyle>;
};

const CommentStyle = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid lightblue;
`;
export default Comment;
