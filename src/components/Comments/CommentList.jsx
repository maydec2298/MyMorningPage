import React from 'react';

const CommentList = (props) => {
  return (
    <div>
      <h1>댓글</h1>
      <div>
        {props.feedContent.map((feedContent, i) => (
          <Comment key={i} feedContent={feedContent} />
        ))}
        {props.feedName.map((feedName, i) => (
          <Comment key={i} feedName={feedName} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
