import './style.css';
import cancelIcon from './assets/cancel-icon.png';
import fetchMeals from './modules/fetchMeals.js';
import displayMeals from './modules/displayMeals.js';
import show, { cancel } from './modules/commentPopup.js';
import { submitComment } from './modules/comment.js';

const cancelIconContainer = document.querySelector('.close-pop-up');
cancelIconContainer.setAttribute('src', cancelIcon);

const start = async () => {
  const data = await fetchMeals();
  displayMeals(data);
};

document.addEventListener('DOMContentLoaded', () => {
  start();
  show();
  JSON.parse(localStorage.getItem('likes'));
});

document.addEventListener('click', () => {
  show();
  cancel();
});
/*
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = 'yl21IJzZqnLUE6745QDJ';

// Function to load comments
const loadComments = async () => {
  try {
    const response = await fetch(`${baseUrl}apps/:${appId}/comments/`);
    const data = await response.json();
    const scoresContainer = document.getElementById('scoresContainer');
    console.log(data.result);
    data.result.forEach((element) => {
      const commentElement = document.createElement('h4');
      commentElement.textContent = `${element.user}: ${element.words}`;
      scoresContainer.appendChild(commentElement);
    });
  } catch (error) {
    console.error('Error refreshing scores:', error);
  }
};

// Function to submit a new score
const submitComment = async () => {
  const userNameInput = document.getElementById('userNameInput');
  const commentInput = document.getElementById('scoreInput');
  const userName = userNameInput.value.trim();
  const commentValue = commentInput.value.trim();

  if (userName && commentValue) {
    try {
      const response = await fetch(`${baseUrl}apps/:${appId}/comments/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           item_id: 'item1',
          username: userName,
          comment: commentValue,
        }),
      });
      await response.json();
      // Clear input fields
      userNameInput.value = '';
      commentInput.value = '';
      // Refresh the scores
      loadComments();
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  }
}; */

// Event listener for the Submit button
/* const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', submitComment);
 */
/* document.addEventListener('click', (event) => {
  const clickedElement = event.target;
  if(clickedElement.className)
}); */

// Attach event listener to the Submit button
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', submitComment);