const BASE_URL = 'https://pixabay.com/api';
const API_URL = '24263315-36ea98cb6d0ce52f0b1c6e073';

const FetchImage = (searchQuery, page) => {
  return fetch(
    `${BASE_URL}/?key=${API_URL}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`Nothing not found with name ${searchQuery}`)
    );
  });
};

export default FetchImage;
