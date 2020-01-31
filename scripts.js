let commentCount = 1;
const commentCounter = document.querySelector('.comment-counter');
const btn = document.getElementById('btn');
const modal = document.getElementById('text-modal');
const userName = document.getElementById('userName');
const msg = document.getElementById('msg');
const submit = document.getElementById('submit');
const cancel = document.getElementById('cancel');

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
  userName.value = '';
  msg.value = '';
  userName.placeholder = '';
  msg.placeholder = '';
}

function createElement() {
  let newElement = document.createElement('div');
    newElement.className = 'comment';
    newElement.innerHTML = `
    <span class="user"><i class="material-icons">person</i>${userName.value}</span>
    <p>${msg.value}</p>
    `
    document.getElementById('bottom-container').insertAdjacentElement('beforeend', newElement);
}

function addComment() {
  if (userName.value != '' && msg.value != '') {
    console.log("The user is " + userName.value);
    createElement();
    closeModal();
    commentCount++;
    commentCounter.innerHTML = '('+ commentCount + ')';    
  } else {
    userName.placeholder = "This field is required before submitting";
    msg.placeholder = "This field is required before submitting";
    console.log("need fields filled");
  }
}

btn.addEventListener('click', openModal);
submit.addEventListener('click', addComment);
cancel.addEventListener('click', closeModal);