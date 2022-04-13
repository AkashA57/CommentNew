const textarea = document.getElementById('textarea');
const commentButton = document.getElementById('comment-button');

var divCommentCounter = 2; 
var commentButtonCounter = 2;


const likeBtn = document.querySelector(".like-btn");
const replyBtn = document.querySelector(".comment-reply");
const commentBtn = document.querySelector(".comment-box").querySelector(".btn.btn-primary");
const commentsCotainer = document.querySelector(".comments-container");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

var comments = document.getElementById("comments");
var txt_node = document.querySelector(".textarea");


// likeBtn.addEventListener("click", () => {

//   if (!clicked) {
//     clicked = true;
//     likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
//     count.textContent++;
//   } else {
//     clicked = false;
//     likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
//     count.textContent--;
//   }

// });

var CommentsButtonListener = function (textNode, isReply, childToRemove) {
   return function(event) {
    comment = textNode.value;
    console.log("Comment button clicked", comment );
    console.log(commentsCotainer);
    if (isReply){
     console.log("Child to remove")
     console.log(childToRemove);
     childToRemove.parentElement.removeChild(childToRemove);
    }
 
    const childDev = commentsCotainer.cloneNode(true); 
    var txtArea = childDev.querySelector(".textarea")
    if (txtArea != null) {
      txtArea.setAttribute("placeholder", "Enter comment here");
    }
    // childDev.setAttribute("class", "comments-container");
 
    // childDev.setAttribute("id", "comment2");
 
    childDev.id = "comment" + divCommentCounter;
    divCommentCounter += 1;
    var commentChild = childDev.querySelector(".comment")
    commentChild.textContent = comment; 
    var replyButton = childDev.querySelector(".comment-reply");
    replyButton.addEventListener("click", ReplyEventListener());
    
 
    // const newContent = document.createTextNode(txt_node.value); 
 
    // childDev.appendChild(newContent);
 
    // childDev.appendChild(newContent); 
    if (!isReply){
     comments.insertBefore( childDev, comments.firstChild ); 
    } else {
     comments.appendChild(childDev);; 
    }
   };
}

var ReplyEventListener = function() {
 return function(event) {
  const commentBox = document.querySelector(".comment-box")
  const childDev = commentBox.cloneNode(true);
  childDev.id = "comment-button" + commentButtonCounter;
  commentButtonCounter += 1;
  childDev.querySelector(".btn.btn-primary").addEventListener("click", 
       CommentsButtonListener(childDev.querySelector(".textarea"), true, childDev));
 
  event.target.parentElement.parentElement.appendChild( childDev); 
 };
}



commentBtn.addEventListener("click", CommentsButtonListener(txt_node, false, null));



replyBtn.addEventListener("click", ReplyEventListener());


