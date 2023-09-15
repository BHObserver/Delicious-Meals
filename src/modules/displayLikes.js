const displayLikes = (data) => {
  const btnSpan = document.querySelectorAll('.btn-span');
  data.map((result) => {
    const { likes } = result;
    return (btnSpan.innerHTML = `${likes} likes`);
  });
};
export default displayLikes;
