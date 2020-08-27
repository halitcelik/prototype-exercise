//
// This is the JavaScript file to alter for the Prototypes exercise.  There are
// helpful comments included in the file, so read them before starting the
// tasks.
//



// The global variable that is used to initialize the comments.
const comments = [
  "I've done this and it's amazing!  I'll never forget it.",
  "I'm thinking about this as well."
];

// Create an instance of the Discussion prototype for task 1 here.
// IMPORTANT POINT: methods need to be attached to the prototype before the
// constructor function is used, otherwise the object will not have the methods
// available to them.
//

// This function builds all of the nodes needed for one comment in the Idea
// page, then appends it to the bottom of the list containing the comments.
// Attach this function as a method of the Discussion prototype in task 2.
let renderComment = (message) => {
  let commentParagraph = document.createElement('p');
  commentParagraph.textContent = message;

  let commentDate = document.createElement('time');
  commentDate.datetime = new Date().toISOString();
  commentDate.textContent = 'Just now';

  let commentTitle = document.createElement('h3');
  commentTitle.className = 'comment__title';
  commentTitle.appendChild(document.createTextNode('You '));
  commentTitle.appendChild(commentDate);

  let commentBody = document.createElement('div');
  commentBody.className = 'comment__body';
  commentBody.appendChild(commentTitle);
  commentBody.appendChild(commentParagraph);

  let commentAvatar = document.createElement('img');
  commentAvatar.className = 'avatar';
  commentAvatar.src = 'assets/images/avatar.png';
  commentAvatar.alt = 'Portrait of commenter';

  let comment = document.createElement('li');
  comment.className = 'comment';
  comment.appendChild(commentAvatar);
  comment.appendChild(commentBody);

  document.querySelector('#comments ul').appendChild(comment);
}

// This function sets the text for the comment count in two places.  The value
// for the number of comments is hard-coded to 2.
// Attach this function as a method of the Discussion prototype in task 2.
let updateCommentCount = function() {
  var numberOfComments = 2 +' comments';
  document.querySelector('.goal__meta a').textContent = numberOfComments;
  document.querySelector('.comments__title span').textContent = numberOfComments;
}


// Initialization: creates two comments and sets the comment count.
// For task 4, create a prototype that contains these three calls.
for(i=0; i<comments.length;i++) {
  renderComment(comments[i]);
}

updateCommentCount();
// End of initialization





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

  // Task 4: render the comment using the Discussion prototype.
}

new AddCommentForm();
