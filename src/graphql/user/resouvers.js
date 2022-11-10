const user = () => {
  return {
    id: '1',
    userName: 'Jonatas',
    age: 21,
  };
};

const users = () => {
  return [
    {
      id: '1',
      userName: 'Henrique',
      age: 21,
    },
    {
      id: '2',
      userName: 'Jonatas',
      age: 21,
    },
  ];
};

export const userResouvers = {
  Query: {
    user,
    users,
  },
};
