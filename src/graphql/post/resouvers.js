const posts = async (_, __, { fetch }) => {
  const response = await fetch('http://localhost:3000/posts');
  return response.json();
};

const post = async (_, { id }, { fetch }) => {
  const response = await fetch(`http://localhost:3000/posts/${id}`);
  const post = response.json();
  console.log(post);
  return post;
};

export const postResouvers = {
  Query: {
    post,
    posts,
  },
};
