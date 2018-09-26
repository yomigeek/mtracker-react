// const baseURL = process.env.NODE_ENV !== 'development'
//   ? 'https://mtrackapi.herokuapp.com/'
//   : 'http://localhost:3000/api/v1';
const baseURL = 'https://mtrackapi.herokuapp.com/api/v1';
const fetchData = (payload) => {
  const { apiUrl, method, data } = payload;
  const apiCallResponse = fetch(`${baseURL}${apiUrl}`, {
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => response.json())
    .catch(error => (error));

  return apiCallResponse;
};

export default fetchData;
