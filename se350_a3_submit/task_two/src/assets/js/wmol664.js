function showArtSubjects() {
  var x = document.getElementById('artSubjects');

  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }


}

function showSQOptions() {
  var x = document.getElementById('sqOptions');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

function showClassicalMusicTab(){
	caller = $(classical_music)

  console.log(caller)
	caller.parent().find(".tab-controls").removeClass("active")
	caller.addClass('active')

	tab_ref = caller.attr('data-ref')
	tab_group = caller.parent().attr('data-tabref')

  console.log(caller)
	console.log(tab_ref)
	console.log(tab_group)

	$("#" + tab_group + " .active-tab").removeClass("active-tab")
	$("#" + tab_group + " #" + tab_ref).addClass("active-tab")
}
