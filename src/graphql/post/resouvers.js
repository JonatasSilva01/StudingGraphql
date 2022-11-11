const posts = async (_, __, { getPost }) => {
  const response = await getPost();
  return response.json();
};

const post = async (_, { id }, { getPost }) => {
  const response = await getPost('/' + id);
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
