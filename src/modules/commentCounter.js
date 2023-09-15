/* const fetchCommentsCount = async (itemId) => {
  const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y9oi34w1aSiFtzn6asAJ/comments?item_id=';
  const response = await fetch(`${apiUrl}${itemId}`);
  const comments = await response.json();
  return comments.length;
};

export default fetchCommentsCount; */
const commentCount = () => {
  const commentList = document.querySelector('#commentsList');
  const inputContainer = document.querySelector('.input-container');
  const commentCount = document.querySelector('.comment-count');
  commentCount.textContent = `Comments: ${commentList.children.length}`;
  inputContainer.appendChild(commentCount);
};

export default commentCount;