
import React from 'react';
import './ColumnCus.css';

const ColumnCus = ({ children, size = 'medium' }) => {
  return <div className={`column ${size}`}>{children}</div>;
};
export default ColumnCus;