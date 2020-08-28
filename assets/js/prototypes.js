//
// This is the JavaScript file to alter for the Prototypes exercise.  There are
// helpful comments included in the file, so read them before starting the
// tasks.
//




// Create an instance of the Discussion prototype for task 1 here.
// IMPORTANT POINT: methods need to be attached to the prototype before the
// constructor function is used, otherwise the object will not have the methods
// available to them.
//



function User(name, surname, avatar) {
  this.name = name;
  this.surname = surname;
  this.avatar = avatar;
}

let halit = new User("halit", "celik", "assets/images/avatar.png");
let anonUser = new User("anonymous", "user", "assets/images/avatar.png");

function Comment(user, commentText) {
  this.user = user;
  this.text = commentText;
  this.time = new Date;
}

let initialComment = new Comment(halit, "initial comment");
let comment1 = new Comment(halit, "I've done this and it's amazing!  I'll never forget it.");
let comment2 = new Comment(anonUser, "I'm thinking about this as well.");


function Discussion(initialComments) {
  this.comments = initialComments;
};




// The global variable that is used to initialize the comments.
const comments = [comment1, comment2];

// This function builds all of the nodes needed for one comment in the Idea
// page, then appends it to the bottom of the list containing the comments.
// Attach this function as a method of the Discussion prototype in task 2.

// This function sets the text for the comment count in two places.  The value
// for the number of comments is hard-coded to 2.
// Attach this function as a method of the Discussion prototype in task 2.
let updateCommentCount = function() {
  var numberOfComments = this.comments.length + ' comments';
  document.querySelector('.goal__meta a').textContent = numberOfComments;
  document.querySelector('.comments__title span').textContent = numberOfComments;
}


Discussion.prototype.renderComment = function(userComment) {
  let commentParagraph = document.createElement('p');
  commentParagraph.textContent = userComment.text;

  let commentDate = document.createElement('time');
  commentDate.textContent = " " + userComment.time;

  let commentTitle = document.createElement('h3');
  commentTitle.className = 'comment__title';
  commentTitle.appendChild(document.createTextNode(userComment.user.name));
  commentTitle.appendChild(commentDate);

  let commentBody = document.createElement('div');
  commentBody.className = 'comment__body';
  commentBody.appendChild(commentTitle);
  commentBody.appendChild(commentParagraph);
  let commentAvatar = document.createElement('img');
  commentAvatar.className = 'avatar';
  commentAvatar.src = userComment.user.avatar;
  commentAvatar.alt = 'Portrait of ' + userComment.user.name;

  let comment = document.createElement('li');
  comment.className = 'comment';
  comment.appendChild(commentAvatar);
  comment.appendChild(commentBody);

  document.querySelector('#comments ul').appendChild(comment);
  this.updateCommentCount()
};

Discussion.prototype.updateCommentCount = updateCommentCount;
Discussion.prototype.renderInitialComments = function() {
  for (i = 0; i < this.comments.length; i++) {
    this.renderComment(this.comments[i]);
  }
  this.updateCommentCount();
}

Discussion.prototype.addComment = function(newComment) {
  this.comments.push(newComment);
  this.renderComment(newComment);
  this.updateCommentCount();
}

let discussion = new Discussion(comments)
discussion.renderInitialComments()
discussion.updateCommentCount()


// This prototype represents the comment input and button.  It will need to be
// modified for tasks 4 and 8.
function AddCommentForm() {
  document.querySelector('.comments__input button')
    .addEventListener('click', this.handleCommentSubmitted.bind(this));
}

AddCommentForm.prototype.takeAndClearMessage = function() {
  var commentTextArea = document.querySelector('#comment');
  var message = commentTextArea.value;
  commentTextArea.value = '';
  return message;
};

AddCommentForm.prototype.handleCommentSubmitted = function(e) {
  e.preventDefault();
  var message = this.takeAndClearMessage();
  if (!message.trim()) {
    console.log("Message cannot be empty!")
    return;
  }
  let user = new User("anonymous", "anonymous", "assets/images/avatar.png")
  comment = new Comment(user, message)
  discussion.addComment(comment)
  // Task 4: render the comment using the Discussion prototype.
}

new AddCommentForm();
