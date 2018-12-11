import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  //console.log(props.children);

  return (
    <div className="UserOutput">
      <p>{props.username}</p>
      <p>This is a user text</p>
    </div>
  );
};

export default userOutput;
