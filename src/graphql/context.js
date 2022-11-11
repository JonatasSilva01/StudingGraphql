import fetch from 'node-fetch';

const API_URL = 'http://localhost:3000';

export const context = () => {
  return {
    getUser: (path = '/') => fetch(API_URL + `/users` + path),
    getPost: (path = '/') => fetch(API_URL + `/posts` + path),
  };
};
