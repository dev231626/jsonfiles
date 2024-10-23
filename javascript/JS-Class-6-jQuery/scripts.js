// $( document ).ready(function() {

// 	// Basic selectors 

// 	// // // Selecting an individual element 
// 	// 	// Using JavaScript 
// 	// 		var el = document.getElementById("four");
// 	// 		console.log(el);

// 	// 	// Using jQuery 
// 	// 		var el = $("#four");
// 	// 		console.log(el);

// 	// // Selecting multiple elements
// 	// 	// // Using JavaScript
// 	// 		var el = document.getElementsByClassName("yellow");
// 	// 		console.log(el);

// 	// 	// Using jQuery 
// 	// 		var el = $(".yellow");
// 	// 		console.log(el[0]);		

// 	// 	// // Using JavaScript
// 	// 		var el = document.getElementsByTagName("li");
// 	// 		console.log(el);

// 	// 	// Using jQuery 
// 	// 		var el = $("li");
// 	// 		console.log(el);



// 	// Filters

// 		var el = $("li");
// 		console.log(el);

// 		// First Element :first
// 		var el = $("li:first");
// 		console.log(el);
// // var el = $("li:nth-")
// // console.log(el);

// 		// Nth element :nth-child()
		var el = $("li:nth-child(4)");

		console.log(el);


// 		// // All even element 
		
		var el = $("li:even");
		console.log(el);

		var el = $("li:odd");
		console.log(el);

// 		$("li:even").css("background-color", "pink");
// 		$("li:odd").css("background-color", "blue");

// 		// Focus  
// 		$("input:first").focus(); 

// 		var el = $("input:focus");
// 		console.log(el);

//   		$(":focus").css("background-color", "pink"); 

//   	// Content filters
//   		// :has(selector)
// 		var el = $("ul:has(.yellow)");
// 		console.log(el);

// 		// // :contains("text")
// 		var el = $("ul:contains(Apple)");
// 		console.log(el);

// 		// // empty
// 		var el = $("li:empty");
// 		console.log(el);
// 		el.hide();

// 	// Visibility 
// 		var el = $("li:hidden");
// 		console.log(el);
      
//  		// el.show();


// 	// Performing Tasks 

// 	// Content
// 		// // // html() 
// 		// // // Used to get the HTML content of the selected element 
// 		// var el = $("#listOfFruits").html();
// 		// console.log(el);
// 		// $("#one").html("<p>Addis Value</p>");
// 		// // // // text() 
// 		// // // // Used to get the text content of the selected element 
// 		// var el = $("#listOfFruits").text();
// 		// console.log(el);
// 		// $("#one").html("<p>Text change</p>");

// 		// // // // html() 
// 		// // // // Used to get the html content of the selected element 
// 		// var el = $("#listOfFruits").html();
// 		// console.log(el);

// 		// // // // text() 
// 		// // // // Used to get the text content of the selected element 
// 		// var el = $("#listOfFruits").text();
// 		// console.log(el);

// 		// // // remove
// 		// var el = $("li:empty");
// 		// el.hide();
// 		// el.remove();

// 	// Elements

// 		// // // before()
// 		// // // Inserts item before the selected item 
// 		// var el = $("li:empty");
// 		// el.before('<li> Before Empty Item </li>');

// 		// // // // after()
// 		// // // // Inserts item after the selected item 		
// 		// var el = $("li:empty");
// 		// el.after('<li> Empty Item Above </li>');	

// 		// // // prepend() 
// 		// // // // Inserts item in the begining of the selected item 	
// 		// var el = $("#listOfFruits");
// 		// el.prepend("<li class='green'> Added using the prepend method </li>");			
			
// 		// // // // append() 
// 		// // // // Inserts item at the end of the selected item 	
// 		// var el = $("#listOfFruits");
// 		// el.append("<li class='green'> Added using the append method </li>");		

// 		// // // // What happens here? 
// 		// var el = $("#five");
// 		// el.append("<p class='green'> Added using the append method </p>");	


// 	// Attributes
// 		// // addClass() & next()
// 		// // Used to add a class(es) to a selected item 
// 		// var el = $("li:empty");
// 		// // el.addClass("green");

// 		// el.after("<li class=''> Empty Item Below </li>").next().addClass("green");		

// 		// // What happens if you do this 
// 		// var el = $("li:empty");
// 		// el.after('<li> Empty Item Above </li>').addClass("green");	

// 		// // css()
// 		// Is used to get or set the css property of a selected element 
// 		// $("#one").css({"background-color": "black", "color": "#fff"});
// 		// $("li").css("border", "4px solid pink");

// 	// Form value 
// 		// // // val()
// 		// var el = $("input:first");
// 		// console.log(el);
// 		// el.val("Some value");
// 		// // el.val();

// 	// Finding elements 
// 		// // find() 
// 		// // Is used to find elements that are decendents of the selected item 
// 		// var el = $("#listOfFruits").find('li.red').css( "background-color", "pink" );

// 		// // What happens if you do this 
// 		// var el = $("#five").find('li').css( "background-color", "pink" );

// 	// Looping through elements
// 		// JavaScript way   
// 		// var el = document.getElementsByTagName("li");
// 		// console.log(el);
// 		// // // For loop in action 
// 		// for (var i = 0; i < el.length; i++) {
// 		// 	var selectedItem = el[i];
// 		// 	selectedItem.style.backgroundColor = "purple";
// 		// 	console.log(selectedItem);
// 		// }

// 		// jQuery way 
// 		// var el = $("li").css( "background-color", "pink" );


// 	// Event handling 

// 		// // Change background on click 
// 		// 	// Javascript way
// 		// 	var el = document.getElementById('change-bg1');
// 		// 	el.onclick = changeBackground; 

// 		// 	// // jQuery way using the on()
// 		// 	// // on() attaches the event handler function for one or more events to the selcted item 
// 		// 	$("#change-bg1").on("click", changeBackground);

// 		// 	// // // jQuery way using the click()
// 		// 	$("#change-bg1").click(changeBackground);
// 		// 	$("#change-bg1").mouseover(changeBackground); 
// 		// 	$( "#change-bg1" ).mouseout(removeBackground); 



// 		/* Form checker on submit */
// 			// JavaScript way 
// 			// var el = document.getElementById('registration-form');
// 			// el.onsubmit = formSubmitChecker; 

// 			// // jQuery way using the on()
// 			$( "#registration-form" ).on( "submit", formSubmitChecker);

// 			// // jQuery way using the click()
// 			// $( "#registration-form" ).submit(formSubmitChecker); 

// 	// Effects

// 		// Basic effects 

// 		// hide()
// 		// Hides the matched element 
// 		// var el = $("#listOfFruits");
// 		// el.hide();

// 		// // show()
// 		// // Shows the selected element 
// 		// $( ".fruits-menu" ).click(function() {
// 		// 	var el = $("#listOfFruits");
// 		// 	el.show();
// 		// });

		
// 		// toggle()
// 		// // Changes back and forth to the show and hide method 

// 		// var el = $("#listOfFruits");
// 		// $( ".fruits-menu" ).click(function(){
// 		// 	el.toggle();
// 		// });


// 		// Sliding Effects 

// 		// slideUp()
// 		// var el = $("#listOfFruits");
// 		// $( ".fruits-menu" ).click(function(){
// 		// 	el.slideUp();
// 		// });

// 		// // slideToggle()
// 		// var el = $("#listOfFruits");
// 		// $( ".fruits-menu" ).click(function(){
// 		// 	el.slideToggle();
// 		// });

// 		// Fadding Effects
// 		// // fadeOut()
// 		// var el = $("#listOfFruits");
// 		// $( ".fruits-menu" ).click(function(){
// 		// 	el.fadeOut();
// 		// });

// 		// // fadeToggle()
// 		// var el = $("#listOfFruits");
// 		// $( ".fruits-menu" ).click(function(){
// 		// 	el.fadeToggle();
// 		// });

// 	// Custom 
// 		// delay()
// 		// When we want to add extra time 
// 		// var el = $("#listOfFruits");
// 		// $( ".fruits-menu" ).click(function(){
// 		// 	el.delay(3000).slideUp();
// 		// });

// 		// // Animation using animate()
// 		var el = $("#listOfFruits");
// 		$( ".fruits-menu" ).click(function(){
// 			el.animate({
// 		    width: "500px",
// 		    opacity: 0.9,
// 		    fontSize: "3em",
// 		    borderWidth: "10px"
// 		  }, 500 );
// 		});

// });


// $("div #h3").css("background-color", "blue")



// var el = $("ul li").css("background-color", "yellow")


// console.log(el.text());

// // el.text("neab")
// console.log(el.text());


// // var h3 = $("#h3")
// // h3.text("ice cream")
// // console.log(h3.text());


// var el = $("h3")

// el.text("ice-cream")

// console.log(el.html());

// var er = $("#listOfFruits")

// console.log(er.html());

// // er.remove();

// // elements

// var neab = document.createElement("li")
// neab.className = "neba"
// console.log(neab.className);

// neab.textContent = "planet"


// er.prepend(neab)
// console.log(neab)
// console.log(er);


// let neba = $("#listOfFruits") 

// let apple = $("#one")



// neba.css("box-shadow", "2px 4px 10px black")

// apple.after("<li class='black'> Added using the prepend method </li>")

// $(".black").css("background-color", "green")
//  neba.prepend("<li class='green'> Added using the prepend method </li>");

//    $(".green").css("background-color", "blue")
 
// function changeBackground() {
//   document.body.style.backgroundColor = "red";
// }



// function removeBackground() {
//   document.body.style.backgroundColor = "";
// }

// function formSubmitChecker(e) {
// 	// Put elements in variable 
// 	var errors = []; 
// 	var elErrorsDisplay = $('#errorsDisplay');

// 	var elFirstName = $(".olla").prevAll("input");
// 	var elPassword = $('.olla').nextAll("input");
// 	// Get their values 
// 	var elFirstNameValue = elFirstName.val(); 
// 	var elPasswordValue = elPassword.val(); 


// 	if (!elFirstNameValue) {
// 		errors.push("First name field is required"); 
// 	}
	
// 	if (elPasswordValue.length < 5) {
// 		errors.push("Password not strong enough"); 
// 	}

// 	// console.log(errors);
// 	if(errors.length > 0) {
// 		e.preventDefault();
// 		elErrorsDisplay.html("");
// 		elErrorsDisplay.css("display", "block");
// 		for (var i = 0; i < errors.length; i++) {
// 			elErrorsDisplay.append(errors[i] + "<br>");
// 		}
		
// 	}
// }



// // jquerry methods
// // //$("li").remove()
// // $("li").empty()

// // // create elements and insert

// $("ul").before("<h2 class = 'an'> hello </h2>")



// // how to access attributes and form values

// // addClass()
// // removeClass()
// // css() - inserting multiple and single styles.

// // $("#one").css({
// // 	"background-color": "black",
// // 	// if there is hyphen(-) on the style you must insert it on quotation-mark like above("") 
// // 	color: "#fff",
// // 	width: "25px"
	
// // })
// // // or
// // $("#one").css({"background-color": "black", color: "#fff", width: "25px" })
// // // single style
// // $("#neba").css("background-color", "pink" )

// // // selecting elements using parent and parents

// // // parent
// // $("input").parent().css({border: blue, "background-color": yellow})
// // // parents

// // $("input").parents().css({
// // 	border: green,
// //     "background-color": blue
// // })

// // // children - used to select and modify the children
// // $("form").children().css({border: "2px solid red"})

// // // find - used to find specific element from an element

// // $("div").find("#four").css({border: "10px solid black"})

// // // siblings - used to select same type of elements. 

// // $("span").siblings().css({border: "10px solid blue"})

// // // next - selects next element from same type of element

// // $(".jeffBezos").next().css({border: "4px solid blue"})

// // // nextAll - selects all elements from the same type 

// // $(".jeffBezos").nextAll().css({border: "4px solid blue"})

// // // prev - opposite of next which selects the previous elements
// // $(".jeffBezos").prev().css({border: "4px solid blue"})

// // // prevAll - selects all previous elements
// // $(".jeffBezos").prevAll().css({border: "4px solid blue"})

// // // 

// // // finding or selecting elements

// // // - find()
// // // - parent()
// // // - next()
// // // - prev()
// // // - has()
// // // - contains()

// // // form values manipulaion methodology

// // // - val() - inserts value for input field commonly used when you want to insert a success message after submmition

// // var el = $("form input:first")
// // el.val("success")

// // // - isNumeric() - to check if the inserted value of input is numeric or not

// // // adding and removing attributes

// // $("#one").attr("name", "tech Giants")
// // $("bold").attr("class", "yellow")

// // $("stg").removeattr("class", "yellow")




// // // el.onmouseleave = checkr;

// // // function checker(){

// // // 	el.val("success")
// // //     el.css("background-color", "yellow")
// // // }
// // el.css("background-color", "yellow")

// // // binding events with the elements

// // // on() - same as eventListener which is used to bind the element and the eventFunction. 

// // // $("#neba").on("submit", event)

// // $("ul li").click(function (){

// // 	$(this).hide()

// // })
// // $(".dom-change-bg").click(function(){
// // 	$("ul li").show()
// // })

// // // // $(".dom-change-bg").on("click", fraud)

// // // // function fraud(){
// // // //     $(".dom-change-bg").css({"background-color": "white", color: "red"})
// // // // }

// // $(".dom-change-bg").after("<div>click me, so i can hide </div>").css({"background-color": "pink", "text-align": "center" })

// // $(".dom-change-bg").after("<div>click me, so i can display the hidden element </div>")




// // $(".container h3").html("<div > neab </div>").css("background-color", "blue")
// // $(".container h3").html("<div> neab </div>").css("padding", "20px")
// // $(".container h3").html("<div> neab </div>").css("color", "red")
// // let classs = $(".container h3")
// // classs.addClass("Neba")
// // console.log(classs);




// $("form").on("submit", function(e){
	
// e.preventDefault()
	
// 	let firstInput = $("input[name = 'first name']").val()

// 	let lastInput = $("input[name = 'last name']").val()

// 	let passwordInput = $("input[name = 'password']").val()
	
// console.log(firstInput);
// console.log(lastInput);
// console.log(passwordInput);

// // $(this).append("<h2>" + firstInput + lastInput +"</h2>")
	

// if($.isNumeric(firstInput) && $.isNumeric(lastInput))
// {
// let sum = parseInt(firstInput) + parseInt(lastInput) 
// $(this).append("<h1>" + sum + "</h1> ")
// }

// else{
// $(this).append("<h1> please enter numbers only </h1> ")
// }
// });

// types of hiding elements

// hide()
// show()
// toggle - allows to hide if shown or show if hiidden
// // fadeToggle - fades out smoothly

// // slideToggle - slides when togging

// var fruit = $(".fruits-menu")
// fruit.on("click", function(){
// 	 $("ul li").slideToggle()
//  })

// $("#reg ").on("click", function(){
// 	$("form").slideToggle()
// })


// $(".container").find("#reg").css({
// 	color: "blue",
// 	"background-color": "red",
// 	width: "150px",
// 	border: "1px solid gray",
// 	"border-radius": "2px",
// 	padding: "3px",
// 	cursor: "pointer",
// 	"margin": "0 auto"
// })

// be.css({
// 	cursor: "pointer"
// })


// animate - to animate the website behaviour


// var be = $("ul li")

// $("fruits-menu").on("click", function(){
// 	be.animate(
// 		{

// 	 width: "500px",
// 	 opacity: 0.9,
// 	 fontSize: "3em",
// 	 borderWidth: "10px"
// 	},
// 	500 
// 	)
// })
// var el = $(" ul li");
// $( ".fruits-menu" ).click(function(){
// 	el.animate({
// 	width: "500px",
// 	opacity: 0.9,
// 	fontSize: "3em",
// 	color: "red",
// 	borderWidth: "10px"
//   }, 5000 )
// })


// $(".fruits-menu").on("click", function(){

// 	$("ul li").slideToggle(300)
// 	$(this).css("cursor", "pointer")
	
	
// })


// $(".dom-change-bg").on("click", function(){

// 	// $("form").Toggle().animate({width: "30px"}, 1000)
// 	// $("form").slideToggle( 1000)
// 	// $("form").css("cursor", "pointer")
	
// })


// setTimeout - used to set a time for a funtion to be executed automatically

$(".fruits-menu").on("click", function(){

	$("ul li").animate({
		width: "10%",
		fontsSize: "16px"
	}, 1000)
   setTimeout(() => {
	$("ul li").animate({
		width: "100%",
		fontsSize: "16px"
	}, 1000)
   },3000)
})




$("#change-bg1").on("click", function(){

	$("form").slideToggle()
	setTimeout(
		function(){
	$("form").slideToggle()

		}, 1000
	)
	
})














