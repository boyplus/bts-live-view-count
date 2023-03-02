import React from 'react';

type ErrorProps = {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div>{message}</div>
  );
}

export default Error;