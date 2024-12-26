// note: about browser object model 


// browser object model represents the current browser window. 
// the main method of the browser object model is to manipulate the properties associated with the browser window.


// browser object model can give access to :-
// documnet ,  history , location , screen,  navigator 

// also gives access to some methods like :- 
// setTimeout()
// setInterval()
// alert() - displays alert at the top of the browser
// confirm() - displays ok and cancel for confirmation
// prompt() - displays an input box to take input text and returns string of that input in the console

// open() - opens site in new tab 
window.open('https://github.com/codespaces')
// close() - used to close the window inside the function bracket
window.close('https://github.com/codespaces')

// innerHeight() - to access height of the window or the page 
 
//  innerWidth() - to access width of the window or the page 


// screen and navigator

// screen - to access the method associated with the screen 
 screen.width // displays the height of the current width 
 screen.height // displays the height of the current height 

// navigator - used to access information about the user using that site

navigator.onLine // checks if the user inside that site is online or not  
// returns true if online or false if not online 
navigator.userAgent // displays the browser version of that user and its window version  

// // history and location Object

//  represents an array of urls visited by the user.

// it gives us two methods
// - back() - it loads the previous page from the browser history.
// forward() - loads next from the browser history.

//  location object 
// can be used to get the deatails of the current page address. also it can 
// be used to redirect browser to a new page in the same browser tab.

// methods are :-
window.location.href - // displays the https link of the page 
// https://127.0.0.1:5500/index.html
window.location.hostname - // displays the ip of the page  
// "127.0.0.1" or "google.com" 
window.location.pathname - // displays the  pathname
window.location.search - // displays the  all info after question mark and path name
window.location.assign('https://www.google.com') - // opens a new page in the current tab














