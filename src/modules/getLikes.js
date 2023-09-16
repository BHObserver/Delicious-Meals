const allLikes = async () => {
  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0TWgjluCPP5AOa5XVRrg';
  const response = await fetch(`${baseURL}/likes/`);
  const data = await response.json();
  return data;
};

const getLikes = async () => {
  const likes = await allLikes();
  return likes;
};

const fetchLikes = async () => {
  const likesUpdate = document.querySelectorAll('.btn-span');
  try {
    const response = await getLikes();
    const likesArray = [];
    response.forEach((item) => {
      likesArray.push(item.likes);
    });

    likesUpdate.forEach((element) => {
      element.textContent = likesArray.shift();
    });
  } catch (error) {
    console.error('Error fetching likes:', error);
  }
};

export default fetchLikes;
