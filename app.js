// if u have three same characters in a string find the index of middle one?
// ur string  is "hello how are you i hope u are doing well".


// var  str ="hello how are you i hope u are doing well, what do u do for your house?";

// var  matchword= "h";

// var toFindIndex=[];


// for (let i = 0; i < str.length; i++) {
//     if (str[i]===matchword) {console.log("Match found at index", i);toFindIndex.push(i);
        
//     };
    
// }

// console.log(toFindIndex)
    
// var middleIndex= toFindIndex[Math.floor(toFindIndex.length / 2)]; //

// console.log("Middle index:", middleIndex);


// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.


// var a = prompt("your name?");
// var b = prompt("your  last name?");

// var c = a+" "+b;

// alert("welcome to our Page"+c)



// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser




// var phoneChoice=prompt("which is ur favourite cell phone?")

// console.log(phoneChoice.length);




// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .




// var myWord = "pakistani";
// var findIndex = "n";
// var index;

// for (let i = 0; i < myWord.length; i++) {
//   if (myWord[i] === findIndex) {
//     index = i;
//     console.log(i);
//     document.write("The string is: " + myWord + "<br>");
//     document.write("The index of 'n' is: " + index);
//     break;
//   }
// }




// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.


// var myWord="Hello world"

// myWordIndex=myWord.lastIndexOf("l")

// console.log(myWordIndex);

//     document.write("The string is: " + myWord + "<br>");
//     document.write("The lastindex of 'l' is: " + myWordIndex);


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// var myWord="pakistani"
// var newWord = myWord.charAt(2)

// console.log(newWord);

// 6. Repeat Q1 using string concat() method.

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.



// var a = prompt("your name?");
// var b = prompt("your  last name?");

// var c = a+" "+b;

// var c = a.concat(" ", b).toUpperCase();


// alert("welcome to our Page"+" "+c+"!")


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// var cityName="Hyderabad";

// var cityName1= cityName.slice(5)

// console.log(cityName1);

// var newName= "islam"

// console.log(newName+cityName1.toUpperCase());


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = "Ali and Sami are best friends. They play cricket and football together."

// var newMessage = message.replace(/and/g,"&")

// console.log(newMessage);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// var num ="472";

// var num1 =parseInt(num);
// console.log(num);
// console.log(typeof(num));
// console.log(num1);
// console.log(typeof(num1));



// 10. Write a program that takes user input. Convert and
// show the input in capital letters.



// var userInput= prompt("what is ur name").toUpperCase();

// console.log(userInput);


// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var name1 =prompt("what is your name?")

// var firstLetter= name1[0].toUpperCase();
// console.log(firstLetter);
//  var restLetter=name1.slice(1)
//  console.log(restLetter);

//  var result=firstLetter.concat(restLetter)

//  console.log(result);


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.



// var num = 35.36 ;

// var num1=num.toString().replace(".","");

// console.log(num1);
// console.log(typeof(num1));



// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64



// var username = prompt("enter ur name");
// var specialChars = "!@.,";
// for (var i = 0; i < username.length; i++) {
//   if (specialChars.indexOf(username.charAt(i)) !== -1) {
//     alert("Invalid username! Please enter a valid username without special characters.");
//     break;
//   }
// }
// if (i === username.length) {
//   console.log("Username:", username);
// }



// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:





// var userInput = prompt('Welcome to our bakery! What do you want to order sir/Ma"am?').toLowerCase();
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// for (let i = 0; i < A.length; i++) {
//   if (userInput === A[i]) {
//     alert(userInput + " is available at index " + i);
//     break; // exit the loop when the item is found
//   }
//   if (i === A.length - 1) {
//     alert("Sorry, " + userInput + " is not available at our bakery.");
//   }
// };












// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.






// var password = prompt("Enter a password:");

// if (password.length < 6) {
//   password = prompt("Invalid password. Please enter a valid password:");
// }

// if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//   password = prompt("Invalid password. Please enter a valid password:");
// }

// var hasAlphabet = false;
// var hasNumber = false;
// for (var i = 0; i < password.length; i++) {
//   var charCode = password.charCodeAt(i);
//   if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//     hasAlphabet = true;
//   } else if (charCode >= 48 && charCode <= 57) {
//     hasNumber = true;
//   }
// }

// if (!hasAlphabet || !hasNumber) {
//   password = prompt("Invalid password. Please enter a valid password:");
// }




// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// var university = "University of Karachi";

// for (let i = 0;i < university.length;i++) {
//     console.log(university[i]);
// i    
// }

// var uniArray =university.split(" ")
// console.log(uniArray);


// for (let i = 0; i < uniArray.length; i++
// ){
// console.log(uniArray[i]);
// }

    
// 17. Write a program to display the last character of a user
// input.


// var userInput = prompt("Enter a string:");
// var lastChar = userInput.slice(-1);
// alert("The last character is: " + lastChar);



// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.



// var string = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// var words = string.toLowerCase().split(" ");

// console.log(words);
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === "the") {
//     count++;
//   }
// }
// alert("The word 'the' occurs " + count + " times in the string.");
