const users = async (_, __, { fetch }) => {
  const response = await fetch('http://localhost:3000/users');
  return response.json();
};

const user = async (_, { id }, { fetch }) => {
  const response = await fetch(`http://localhost:3000/users/${id}`);
  const user = await response.json();
  console.log(user);
  return user;
};

export const userResouvers = {
  Query: {
    user,
    users,
  },
};
