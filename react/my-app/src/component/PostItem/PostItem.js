import React from 'react';
import MyButton from '../UI/button/MyButton';
import '../../styles/app.css';
import { useNavigate } from 'react-router-dom';

const PostItem = ({ post: { title, id, body }, number, remove }) => {
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {id}. {title}
        </strong>
        <div> {body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${id}`)}>Open</MyButton>
        <MyButton onClick={() => remove({ title, id, body })}>Delete</MyButton>
      </div>
    </div>
  );
};
export default PostItem;
