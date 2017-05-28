function submitA2(){
  // Get the modal
  var modal = document.getElementById('submitModal');

  // Get the button that opens the modal
  var btn = document.getElementById("submitBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Close modal if back to assignments is clicked and load assignment list
  var backBtn = document.getElementById("backToAssignments");
  backBtn.onclick = function() {
    modal.style.display = "none";
    createAssignment();
  }
}
