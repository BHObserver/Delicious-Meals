const addCommentCounter = () => {
  const commentItems = document.querySelectorAll('.comment_paragraph');
  const numberOfComments = commentItems.length;
  return numberOfComments;
};

module.exports = addCommentCounter;
