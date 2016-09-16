 
 $(document).ready(function(){

   // jQuery methods go here...
var colors = ["#CCCCCC","#333333","#990099","tomato","red","blue","green","grey"];                
  var rand = Math.floor(Math.random()*colors.length); 

   $("#co").click(function() {
    $("body").css("background-color",colors[rand]);
});
 
 });