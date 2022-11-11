const users = async (_, __, { getUser }) => {
  const response = await getUser();
  return response.json();
};

const user = async (_, { id }, { getUser }) => {
  const response = await getUser('/' + id);
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
