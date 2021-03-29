import * as React from 'react';

export const DefaultContent = ({ children }: { children?: any }) => (
  <div
    style={{
      alignItems: 'center',
      backgroundColor: '#ddffdd',
      display: 'flex',
      height: '240px',
      justifyContent: 'center',
      overflow: 'hidden',
      width: '320px',
    }}
  >
    {children || 'Hello, world!'}
  </div>
);
