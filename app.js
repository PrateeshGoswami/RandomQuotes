
function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } } 
var currentQuote = '', currentAuthor = '';
$(document).ready(function(){
	$.ajaxSetup({
		cache: false //needed in order to update quotes
	});
function getNewQuote() {
		$.getJSON("https//quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(data) {
			if(data[0].content.length > 120) {
				getNewQuote();
			}
			else{
				$("#quote").text(data[0].content);
				var quoteAuthor = " —" + data[0].title; 
				$("#quoteAuthor").html(quoteAuthor);
			}
		});
	}
   // jQuery methods go here...
getNewQuote();
	   $("#co").on("click", function() {
	   	getNewQuote();
	   	var colors = ["#CCCCCC","#333333","#990099","tomato","red","blue","green","grey"];                
	    var rand = colors[Math.floor(Math.random()*colors.length)]; 

		    $("body").css("background-color",rand);
		    // $("#quote").text("This is a quote")
		  
		
   		});
 
});
