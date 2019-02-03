import React, { useState } from 'react';

import ResourceList from './ResourceList';

const App = () => {
  const [resource, setResource] = useState('todos');
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setResource('todos');
          }}
        >
          Todos
        </button>
        <button
          onClick={() => {
            setResource('posts');
          }}
        >
          Posts
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
