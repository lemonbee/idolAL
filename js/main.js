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
$('.femaleidol-btn').click(function(){
	alert("女神");
})
$('.maleidol-btn').click(function(){
	alert("男神");
})
$('.refresh-btn').click(function(){
	alert("换一批");
})
//$(".edit-page").show();
});



