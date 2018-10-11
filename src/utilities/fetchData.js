const baseURL = 'https://mtrackapi.herokuapp.com/api/v1';
/**
 * @description this FETCHES the back-end API
 */
const fetchData = (payload) => {
  let headers;
  const {
    apiUrl, method, data, headerType,
  } = payload;
  if (headerType === 'token-type') {
    const token = localStorage.getItem('token');
    headers = {
      'Content-Type': 'application/json',
      'x-access-token': token,
    };
  } else {
    headers = {
      'Content-Type': 'application/json',
    };
  }
  const apiCallResponse = fetch(`${baseURL}${apiUrl}`, {
    method: method || 'GET',
    headers,
    body: JSON.stringify(data),
  }).then(response => response.json())
    .catch(error => (error));

  return apiCallResponse;
};

export default fetchData;
