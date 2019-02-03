import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      // immediately invoked function -> to get around useEffect anti async/await
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
      setResources(data);
    })(resource);
  }, [resource]); // [] => function only invoked at start, [resource] => if resource changes -> invoke, no array => invoked at every rerender

  return resources;
};

export default useResources;
