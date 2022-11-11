import fetch from 'node-fetch';

export const context = () => {
  return {
    getUser: (path = '/') => fetch(`http://localhost:3000/users` + path),
    getPost: (path = '/') => fetch(`http://localhost:3000/posts` + path),
  };
};
