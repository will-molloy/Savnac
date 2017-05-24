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
  $(".tab-controls").removeClass("active")
}

function close_tab_panes(){
  $(".active-tab").removeClass("active-tab")
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
