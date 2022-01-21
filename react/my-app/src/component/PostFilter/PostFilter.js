import React from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';

export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        placeholred="Search"
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        value={filter.query}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaulValue="Sort"
        options={[
          { value: 'title', name: 'For title' },
          { value: 'body', name: 'For description' }
        ]}
      />
    </div>
  );
}
