function addComment(){

  // Increment comment count
  var commentCount = $("#numComments").text();
  var count = parseInt(commentCount.replace(/\D/g,'')); // replace non digits
  $("#numComments").text("Comments: " + ++count);

  // Add comment to beginning of comment section
  var textarea = document.createElement("textarea");
  textarea.value += "This is a comment you posted.";
  textarea.setAttribute("id", "feedbackQAnswer");
  var commentSection = document.getElementById("comment-section");
  commentSection.insertBefore(textarea, commentSection.firstChild);

  // Add name tag above comment
  var nameTag = document.createElement("h3");
  nameTag.innerText = "You: ";
  commentSection.insertBefore(nameTag, commentSection.firstChild);
}
