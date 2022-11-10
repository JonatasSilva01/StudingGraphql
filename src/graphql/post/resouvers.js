const post = () => {
  return {
    id: 'abcse-135',
    title: 'pagina de consulta',
    page: 1,
  };
};

const posts = () => {
  return [
    {
      id: 'abcse-135',
      title: 'pagina de consulta',
      page: 1,
    },
    {
      id: 'abcse-100',
      title: 'pagina de contato',
      page: 2,
    },
    {
      id: 'abcse-100',
      title: 'livraria',
      page: 3,
    },
  ];
};

export const postResouvers = {
  Query: {
    post,
    posts,
  },
};
