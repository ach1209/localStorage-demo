const commentCounter = document.querySelector('.comment-counter');
let commentCount = 1;
let getAllComments = JSON.parse(localStorage.getItem('allComments'));

window.onload = () => {
  if (getAllComments) {
    getAllComments.forEach(comment => createElement(comment.user, comment.msg));
    commentCount += getAllComments.length;
    commentCounter.innerHTML = '('+ commentCount + ')';    
  }
}

toggleModal = () => {
  const modal = document.getElementById('text-modal');

  if (modal.style.display == "block") {
    modal.style.display = "none";
    let userGenerated = [userName, msg];
    for (let i = 0; i < userGenerated.length; i++) {
      userGenerated[i].value = '';
      userGenerated[i].placeholder = '';
    }
  } else {
    modal.style.display = "block";
  }
}

class AddedComment {
  constructor(_user, _msg) {
    this.user = _user;
    this.msg = _msg;
  }
}

createElement = (name, message) => {
  let newElement = document.createElement('div');

  newElement.className = 'comment';
  newElement.innerHTML = `
  <span class="user"><i class="material-icons">person</i>${name}</span>
  <p>${message}</p>
  `
  document.getElementById('comment-container').insertAdjacentElement('beforeend', newElement);
}

addComment = () => {
  const userName = document.getElementById('userName');
  const msg = document.getElementById('msg');

  if (userName.value.trim() !== '' && msg.value.trim() !== '') {
    let newComment = new AddedComment(userName.value, msg.value);
    // Create empty array to house incoming comments if getAllComments is empty 
    if (getAllComments == null) {
      getAllComments = [];
    }
    getAllComments.push(newComment);
    localStorage.setItem('allComments', JSON.stringify(getAllComments));
  
    // Add HTML element and update comment count
    createElement(newComment.user, newComment.msg);
    toggleModal();
    commentCount++;
    commentCounter.innerHTML = '('+ commentCount + ')';    
  } else {
    userName.placeholder = "This field is required before submitting";
    msg.placeholder = "This field is required before submitting";
  }
}

document.getElementById('btn').addEventListener('click', toggleModal);
document.getElementById('submit').addEventListener('click', addComment);
document.getElementById('cancel').addEventListener('click', toggleModal);