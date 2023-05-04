$( function() {
  $( ".noteHolder" ).draggable();
} );
$(document).on('click','.btn-edit',function(){
//console.log($(this).closest('.noteHolder').find('.colors'));	
$(this).closest('.noteHolder').find('.colors').toggleClass("act");
$(this).find('i').toggleClass('fa-palette, fa-times');
});
$(document).on('click', '.colors div', function(){ var className = $(this).attr('class');
$(this).closest('.noteHolder').find('.note').removeClass('note-yellow note-green note-levendor note-orange');
$(this).closest('.noteHolder').find('.note').addClass(className);
// if($('.note').is('[class*="note-"]')){
//   var hasClass = this.className.match(/note-\w+/);
//   console.log(hasClass);
//   $(this).closest('.noteHolder').find('.note').removeClass(hasClass);
//   $(this).closest('.noteHolder').find('.note').addClass(className);
// }else{
//   $(this).closest('.noteHolder').find('.note').addClass(className);
// }
});
$(document).on('click','.btn-del', function(){
Swal.fire({
title: 'Are you sure want to delete this note?',
type: 'warning',
showCancelButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
confirmButtonText: 'Yes, delete it!'
}).then((result) => {
if (result.value) {
  $(this).closest('.noteHolder').remove();
  Swal(
    'Deleted!',
    'Your note has been deleted.',
    'success'
  )
}
});
})
var i = 0;
$('.btn-add').click(function(){
i++;
$('body').prepend('<div class="noteHolder"><input type="checkbox"><div class="note rounded"><textarea placeholder="Add your note!"></textarea></div>  <div class="action"><div class="colors"><div class="note-yellow"></div><div class="note-green"></div><div class="note-levendor"></div>   <div class="note-orange"></div></div><button type="button" class="btn btn-edit"><i class="fa fa-palette"></i></button><button type="button" class="btn btn-del"><i class="fa fa-trash"></i></button></div></div>');
$('.noteHolder:last').find('textarea').attr('id', 'note-'+i);
$( ".noteHolder" ).draggable();
});
$(document).ready(function(){
$('textarea').bind('input propertychange',function(){
  var notes= $(this).val();
  if (typeof(Storage) !== "undefined") {
    localStorage.value = notes;
    // alert(localStorage.value);
  }else {
  $('body').innerHTML = "Sorry, your browser does not support web storage...";
}
 });
});