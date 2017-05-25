function showArtSubjects() {
  var x = document.getElementById('artSubjects');

  make_tabs_non_active();

  if (x.style.visibility === 'visible') {
    x.style.visibility = 'hidden';

    $("#homeTab").addClass("active")
    $("#ahTab").css( "visibility", "hidden" );
  } else {
    x.style.visibility = 'visible';

    $("#ahTab").addClass("active")
    $("#ahTab").css( "visibility", "visible" );
  }
}

// duplicate code - can fix? is this marked?
function showAssignments() {
  var x = document.getElementById('assignments');

  make_tabs_non_active();

  if (x.style.visibility === 'visible') {
    x.style.visibility = 'hidden';

    $("#cmTab").addClass("active")
    $("#sqTab").css( "visibility", "hidden" );
  } else {
    x.style.visibility = 'visible';

    $("#sqTab").addClass("active")
    $("#sqTab").css( "visibility", "visible" );
  }
}

// From tabbing.js (DHTML Tutorial)
function change_tab(el){
  caller = $(el)

  caller.parent().find(".tab-controls").removeClass("active")
  caller.addClass('active')

  tab_ref = caller.attr('data-ref')
  tab_group = caller.parent().attr('data-tabref')

  console.log(tab_ref)
  console.log(tab_group)

  $("#" + tab_group + " .active-tab").removeClass("active-tab")
  $("#" + tab_group + " #" + tab_ref).addClass("active-tab")

  if (tab_ref == "home"){
    $("#artSubjects").css( "visibility", "hidden" );
    $("#ahTab").css( "visibility", "hidden" );
    $("#cmTab").css( "visibility", "hidden" );
    $("#sqTab").css( "visibility", "hidden" );
  }
  removeAssignmentTabFromBreadCrumb();
}

function show_music_tab(){

  close_tab_panes();
  make_tabs_non_active();

  // Make cm tab active
  $("#cmTab").addClass("active")
  // Show cm tab pane
  $("#classical_music, #pages").addClass("active-tab")

  $("#ahTab").css( "visibility", "visible" );
  $("#cmTab").css( "visibility", "visible" );

  // Hide assignments and portfolios and resources
  $("#cmTab").addClass("active")
  $("#sqTab").css( "visibility", "hidden" );
  $("#assignments").css( "visibility", "hidden" );
}

function make_tabs_non_active(){
  $(".tab-controls").removeClass("active");
  removeAssignmentTabFromBreadCrumb();
}

function close_tab_panes(){
  removeAssignmentTabFromBreadCrumb();
  $(".active-tab").removeClass("active-tab");
}

function show_all_tabs_in_breadcrumb(){
  $("#tabbing-controls > *").css( "visibility", "visible" );
}

function ahTabButton(){

  close_tab_panes();
  make_tabs_non_active();

  $("#ahTab").addClass("active")
  $("#home, #pages").addClass("active-tab")

  $("#ahTab").css( "visibility", "visible" );
  $("#cmTab").css( "visibility", "hidden" );
  $("#sqTab").css( "visibility", "hidden" );
}

function sqTabButton(){

  close_tab_panes();
  make_tabs_non_active();

  $("#sqTab").addClass("active")
  $("#classical_music, #pages").addClass("active-tab")

  $("#ahTab").css( "visibility", "visible" );
  $("#cmTab").css( "visibility", "visible" );
  $("#sqTab").css( "visibility", "visible" );
}

function createAssignment(option){
  close_tab_panes();
  make_tabs_non_active();
  show_all_tabs_in_breadcrumb();

  // Show structured questions image at top
  $("#assignment_tab_pane").addClass("active-tab");

  // Depending on list element clicked, show correct tab pane and breadcrumb
  var breadCrumbText = "";
  switch(parseInt(option)){
    case 1:
      $("#doing_assignment_tab_pane, #pages").addClass("active-tab");
      breadCrumbText += "Assignment 2";
      break;
    case 2:
      $("#view_feedback_assignment_tab_pane, #pages").addClass("active-tab");
      breadCrumbText += "Assignment 1 Feedback";
      break;
    case 3:
      $("#give_feedback_assignment_tab_pane, #pages").addClass("active-tab");
      breadCrumbText += "Assignment 1 Review";
      break;
    default:
      console.log("No valid assignment tab pane: " + option)
  }

  // Append assignment tab to breadcrumb
  var tabbingControls = document.getElementById("tabbing-controls");
  var newTabItem = document.createElement("li");
  var newTabItemValue = document.createTextNode(breadCrumbText);

  newTabItem.appendChild(newTabItemValue);
  newTabItem.className += "active";
  newTabItem.setAttribute("id", "assignment_tab"); // to remove later

  tabbingControls.appendChild(newTabItem);
}

function removeAssignmentTabFromBreadCrumb(){
  $('#assignment_tab').remove();
}
