const allLikes = async () => {
  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0TWgjluCPP5AOa5XVRrg';
  const response = await fetch(`${baseURL}/likes/`);
  const data = await response.json();
  return data;
};

const getLikes = async () => {
  const likes = await allLikes();
  return likes; // Just return the array
};

// To use the getLikes function and store the array in a variable:
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
    // Handle any errors that occurred during the fetch
    console.error('Error fetching likes:', error);
  }
};

// Call the fetchDataAndStore function to retrieve and store the array
export default fetchLikes;
