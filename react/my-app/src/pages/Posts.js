import React, { useState, useEffect, useRef } from 'react';
import Form from '../component/Form/Form';
import PostFilter from '../component/PostFilter/PostFilter';
import PostList from '../component/PostList/PostList';
import MyButton from '../component/UI/button/MyButton';
import MyModal from '../component/UI/modal/MyModal';
import { usePost } from '../hooks/usePost';
import PostService from '../API/PostService';
import Loader from '../component/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../component/UI/pagination/Pagination';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../component/UI/select/MySelect';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortAndSearchedPosts = usePost(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1);
  });
  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const changePage = page => {
    setPage(page);
  };

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: '30px' }}
        onClick={() => {
          setModal(true);
        }}
      >
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        {' '}
        <Form create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaulValue="How many items in a page"
        options={[
          { value: 5, name: 5 },
          { value: 10, name: 10 },
          { value: 15, name: 15 },
          { value: -1, name: 'show all' }
        ]}
      />
      {postError && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px'
          }}
        >
          {' '}
          <h2>Opps,error:{postError}</h2>
        </div>
      )}
      <PostList
        remove={removePost}
        posts={sortAndSearchedPosts}
        title="Daily Posts"
      />
      <div ref={lastElement} style={{ height: 20, background: 'red' }}></div>
      {isPostLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px'
          }}
        >
          {' '}
          <Loader />
        </div>
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
