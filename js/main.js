$(document).ready(function(){

$(".page").css("display", "block");
$(".wrap").show();
$(".page-select").hide();

$(".edit-page").hide();
$(".result-page").hide();

$('.logSubmit-button').click(function(){
	$(".page-logon").remove();
	$(".page-select").show();
})
//$(".edit-page").show();
});



