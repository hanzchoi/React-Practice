import React from 'react';

const UserOutput = (props) => {
  //console.log(props.children);

  return (
    <div>
      <p>{props.username}</p>
      <p>This is a user text</p>
    </div>
  )
}

export default UserOutput;
