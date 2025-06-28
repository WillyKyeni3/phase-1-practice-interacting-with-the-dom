// code that makes the timer increament every second once the page loads
let timer = document.getElementById('counter');
let count = 0;
let intervalId;
// This function starts the timer when the page loads
function incrementCounter() {
  count++;
  timer.innerText = count;
}
//decrementCounter function decrements the counter by 1 and updates the timer display
function decrementCounter() {
  count--;
  timer.innerText = count;
}

// Store likes for each number
const likes = {};

function likeNumber() {
  const current = count;
  likes[current] = (likes[current] || 0) + 1;

  let likesList = document.querySelector('.likes');
  let existingLike = likesList.querySelector(`[data-num="${current}"]`);

  if (existingLike) {
    existingLike.innerText = `${current} has been liked ${likes[current]} time${likes[current] > 1 ? 's' : ''}`;
  } else {
    let li = document.createElement('li');
    li.dataset.num = current;
    li.innerText = `${current} has been liked 1 time`;
    likesList.appendChild(li);
  }
}

// pause/resume functionality
function togglePause(){
    const pauseBTn = document.getElementById('pause');
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const heartBtn = document.getElementById('heart');

    if (pauseBTn.innerText === 'pause') {
        clearInterval(intervalId);
        pauseBTn.innerText = 'resume';
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        heartBtn.disabled = true;
    } else {
        intervalId = setInterval(incrementCounter, 1000);
        pauseBTn.innerText = 'pause';
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        heartBtn.disabled = false;
}
}

// Start the timer when the page loads
window.addEventListener('DOMContentLoaded', () => {
  timer.innerText = count;
  intervalId = setInterval(incrementCounter, 1000);

  // Plus button
  document.getElementById('plus').addEventListener('click', incrementCounter);

  // Minus button
  document.getElementById('minus').addEventListener('click', decrementCounter);

    // Like button
    document.getElementById('heart').addEventListener('click', likeNumber);

    // Pause/Resume button
    document.getElementById('pause').addEventListener('click', togglePause);

    // Comment form submission
    document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('comment-input');
    const comment = input.value.trim();
    if (comment) {
      const commentDiv = document.createElement('div');
      commentDiv.textContent = comment;
      document.getElementById('list').appendChild(commentDiv);
      input.value = '';
    }
  });
});

