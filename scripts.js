let commentCount = 1;
const commentCounter = document.querySelector('.comment-counter');
const btn = document.getElementById('btn');
const modal = document.getElementById('text-modal');
const submit = document.getElementById('submit');
const cancel = document.getElementById('cancel');

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function addComment() {
  commentCount++;
  commentCounter.innerHTML = '('+ commentCount + ')'
  closeModal();
}

btn.addEventListener('click', openModal);
submit.addEventListener('click', addComment);
cancel.addEventListener('click', closeModal);