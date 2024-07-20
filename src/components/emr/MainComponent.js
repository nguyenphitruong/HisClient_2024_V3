import React, { useContext } from 'react';
import { DataContext } from '../../contexts/ShareContext/DataContext';
import  Sidebars from '../../layouts/Sidebars';

function MainComponent (props) {
  const { data } = useContext(DataContext);
  console.log("data maincomponent:" + data);

  return (
    <div>
        < Sidebars
        {...props}
        routes={data}
      />
      <h1>Main Component</h1>
      <ul>
        {data.map(item => (
          <li key={item.code}>{item.modulename} {item.modulepath} {item.moduleicon} </li>
        ))}
      </ul>
    </div>
  );
};

export default MainComponent;