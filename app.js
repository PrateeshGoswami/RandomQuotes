
function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } } 
var currentQuote = '', currentAuthor = '';
$(document).ready(function(){
	$.ajaxSetup({
		cache: false //needed in order to update quotes
	});

   // jQuery methods go here...

	   $("#co").on("click", function() {
	   	var colors = ["#CCCCCC","#333333","#990099","tomato","red","blue","green","grey"];                
	    var rand = colors[Math.floor(Math.random()*colors.length)]; 

		    $("body").css("background-color",rand);
		    // $("#quote").text("This is a quote")
		   $.ajax({
		   	 headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
  type: 'GET',
  dataType: 'json',
  url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
  success: function(response){
  	var r = JSON.parse(response);
  	currentQuote = r.quote;
    $("#quote").text(currentQuote);
  }
});
		
   		});
 
});
