import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource); // calls function containing all the logic
  const renderList = () => {
    return resources.map(resource => {
      return (
        <li className="ui container row" key={resource.id}>
          {resource.title}
        </li>
      );
    });
  };
  return <ul className="ui container">{renderList()}</ul>;
};

export default ResourceList;
