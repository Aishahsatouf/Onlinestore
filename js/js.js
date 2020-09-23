

// function greeting(){
    
//     var day = new Date();
//     var hournow = prompt ('please write the date today')
//     if (hournow< 15) {
//         greeting= 'Welcome to our store';
//     } else {
//         greeting= 'Hello this is my store';
//     }
//      document.write(greeting);
// }

// greeting();

var showOrder = function () {
    
    var firstInput = prompt('please enter your name');
    var userInput = prompt('please enter your age');
    greeting = firstInput;
    var userOrder = '';
    while (userInput <25 || userInput >80) {
      var userInput = alert('you are too young or too old to own ahouse');
      var userInput = prompt('please enter a number between 25-80');
    }
    var numberOfImages = prompt('how many items do you want to print?');
   
   for (var i = 1; i <= numberOfImages; i++) {
     if (userInput => 50) {
       userOrder =  '<img src="images/house.png" >';
       
     } else if (userInput < 50) {
       userOrder = '<img src="images/hotel.png" >';
       
     }
     document.write('<p>' + 'welcome to our page '+greeting+userOrder + '</p>');
   }
   
 }
 showOrder();