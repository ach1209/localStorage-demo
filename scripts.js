let commentCount = 1;
const commentCounter = document.querySelector('.comment-counter');
const btn = document.getElementById('btn');
const modal = document.getElementById('text-modal');
const userName = document.getElementById('userName');
const msg = document.getElementById('msg');
const submit = document.getElementById('submit');
const cancel = document.getElementById('cancel');
let getAllComments = JSON.parse(localStorage.getItem('allComments'));

window.onload = () => {
  if (getAllComments) {
    console.log(getAllComments);
    getAllComments.forEach(comment => {
      let newElement = document.createElement('div');
      newElement.className = 'comment';
      newElement.innerHTML = `
      <span class="user"><i class="material-icons">person</i>${comment.user}</span>
      <p>${comment.msg}</p>
      `
    document.getElementById('bottom-container').insertAdjacentElement('beforeend', newElement);
    });
    commentCount += getAllComments.length;
    commentCounter.innerHTML = '('+ commentCount + ')';    
  }
}

function toggleModal() {
  if (modal.style.display == "block") {
    modal.style.display = "none";
    userName.value = '';
    msg.value = '';
    userName.placeholder = '';
    msg.placeholder = '';
  } else {
    modal.style.display = "block";
  }
}

function AddedComment(user, msg) {
  this.user = user,
  this.msg = msg
}

function createElement() {
  let newComment = new AddedComment(userName.value, msg.value);
  if (getAllComments == null) {
    getAllComments = [];
  }
  getAllComments.push(newComment);
  localStorage.setItem('allComments', JSON.stringify(getAllComments));

  let newElement = document.createElement('div');
      newElement.className = 'comment';
      newElement.innerHTML = `
      <span class="user"><i class="material-icons">person</i>${newComment.user}</span>
      <p>${newComment.msg}</p>
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

btn.addEventListener('click', toggleModal);
submit.addEventListener('click', addComment);
cancel.addEventListener('click', toggleModal);