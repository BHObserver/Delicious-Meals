// Define the base URL for the Involvement API
const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yl21IJzZqnLUE6745QDJ/comments';

// Function to fetch comments for a specific item
export const fetchComments = async (id) => {
  try {
    const itemId = id;

    const response = await fetch(`${apiUrl}?item_id=${itemId}`);
    const comments = await response.json();
    console.log(comments);
    if (comments === null) {
      console.log('There are no comments yet');
    }

    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = ''; // Clear previous comments

    comments.forEach((comment) => {
      const commentItem = document.createElement('li');
      commentItem.textContent = `${comment.username}: ${comment.comment}`;
      commentsList.appendChild(commentItem);
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};

// Function to submit a new comment
export const submitComment = async (id) => {
  try {
    const itemId = id; // Replace with the actual item ID
    const userNameInput = document.getElementById('userNameInput');
    const commentInput = document.getElementById('commentInput');
    const userName = userNameInput.value.trim();
    const commentValue = commentInput.value.trim();

    if (userName && commentValue) {
      const response = await fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'item_id': itemId,
          'username': userName,
          'comment': commentValue,
        }),
      });

      if (response.status === 201) {
        // Comment successfully submitted, refresh comments
        userNameInput.value = '';
        commentInput.value = '';
        fetchComments(itemId); // Pass itemId to fetchComments
      } else {
        const responseData = await response.json();
        console.error('Error submitting comment:', responseData.message);
      }
    }
  } catch (error) {
    console.error('Error submitting comment:', error);
  }
};