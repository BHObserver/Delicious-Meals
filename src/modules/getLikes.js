import baseURL from './baseURL.js';

const getLikes = async () => {
  const response = await fetch(`${baseURL}/likes/`);
  const likes = await response.json();
  return likes;
};

export default getLikes;
