const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = 'abaa1623fb92be4d9a5d378cf28d3cba';
export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`;
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;


// const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
// const API_KEY = 'bc1916c48a38c10e97e880b56497b99d';

// const API_BACKEND_DOMAIN = "http://localhost:5000/api/news";

// export const endpointPath = (country, category) =>
//   `${API_BACKEND_DOMAIN}?country=${country}&category=${category}`;

// export const endpointSearch = (searchQuery) =>
//   `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;
