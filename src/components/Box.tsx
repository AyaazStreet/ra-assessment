import React from 'react';
import Draggable from 'react-draggable';

type Props = {
  style: React.CSSProperties;
};

export const Box = (props: Props) => {
  return (
    <Draggable>
      <div style={props.style}></div>
    </Draggable>
  );
};
