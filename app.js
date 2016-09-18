 
$(document).ready(function(){

   // jQuery methods go here...

	   $("#co").on("click", function() {
	   	var colors = ["#CCCCCC","#333333","#990099","tomato","red","blue","green","grey"];                
	    var rand = colors[Math.floor(Math.random()*colors.length)]; 

		    $("body").css("background-color",rand);
		    $("#quote").text("This is a quote")
		     $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
              $(".quote").html(JSON.stringify(json));
             });
		      function logResults(json){
 				 console.log(json);
				}

					$.ajax({
					  url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
					  dataType: "jsonp",
					  jsonpCallback: "logResults"
					});
   		});
 
});