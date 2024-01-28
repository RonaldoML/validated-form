const getStarWarsFilmsRequest = async () => {

  const url = new URL(import.meta.env.VITE_URL);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query Query {
          allFilms {
            films {
              title
              id
            }
          }
        }
      `
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch films');
  }

  return data;
}

export const getStarWarsFilms = () => ({
  queryKey: ['films'],
  queryFn: async () => {
    const data = await getStarWarsFilmsRequest();
    return data;
  }
});
