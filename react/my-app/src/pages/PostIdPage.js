import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../component/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

export default function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [commnets, setComments] = useState([]);

  const [fetchIdById, isLoading, error] = useFetching(async id => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComment, isCommenting, comError] = useFetching(async id => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchIdById(params.id);
    fetchComment(params.id);
  }, []);

  return (
    <div>
      <h1>Post c ID : {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
      <h3>comments</h3>
      {isCommenting ? (
        <Loader />
      ) : (
        <div>
          {commnets.map(comm => (
            <div key={comm.id} style={{ marginTop: '15px' }}>
              <h5>{comm.email}</h5>
              <p>{comm.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
