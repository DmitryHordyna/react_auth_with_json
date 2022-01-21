import React from 'react';
import PostItem from '../PostItem/PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function PostList({ remove, posts, title }) {
  if (!posts.length) {
    return <h2 style={{ textAlign: 'center' }}>Don't have post</h2>;
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: 'red' }}>{title}</h2>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
