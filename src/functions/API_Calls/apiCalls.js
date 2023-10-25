import axios from 'axios'

axios.defaults.baseURL =  `${process.env.REACT_APP_BASE_PATH}/api`

//This is a generic API function. 

const api = {
  get: async (url) => {
    return apiCalls('GET', url);
  },
  post: async (url, data) => {
    return await apiCalls('POST', url, data);
  },
  put: async (url, data) => {
    return apiCalls('PUT', url, data);
  },
  delete: async (url) => {
    return apiCalls('DELETE', url);
  },
};

async function apiCalls(method, url, data) {
  try {
    const res = await axios({
      headers: {
        'Authorization': localStorage.token ? `Bearer ${localStorage.token}` : ''
      },
      method,
      url,
      data
    });
    return await res.data;
  } catch (error) {
    throw error;
  }
}


// export const setToken = (token) => {
//   // when you do logout pass the parameter as an empty string
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}` //AUTH_TOKEN
  
// }

export default api;

