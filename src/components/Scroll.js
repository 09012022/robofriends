import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '3px solid lime', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;