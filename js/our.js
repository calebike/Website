$("docuemnt").ready(function(){
$("#content").load("main/index.html");

$("ul#nav li a").click(function(){

$("#content").hide();
var page =$(this).attr('href');

$("#content1").load('main/'+ page +'.html');

$("#content").hide();
return false;

});


});


