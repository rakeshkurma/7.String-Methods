




/* 1. Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result -
Input: Ice Output: Ice
Input:Icecream Output:Icec... */

let a="icecre";
let len=a.length;
if(len>4)
a=a.substring(0,4);
console.log(a);

/* 2. Input a String S with multiple words, and remove whitespaces and
output the result -
Input: “Hii Boy” Output: “HiiBoy” */

const prompt=require("prompt-sync")();
let nam=prompt(" Enter a String to Remove White Spaces ");
nam=nam.replaceAll(" ","");
console.log(` ${nam} /n`);


/* 3. Input a String S with two words, and replace first word with second word
and display the result -
// Input: “Hii Boy” Output: “Boy Hii” */

let str=prompt(" Enter String with 2 words  ");

let temp="";
let i=0;
while(str[i]!=" ")
     temp+=str[i++];
    
     let lenn=temp.length;
str=str.slice(lenn+1);
str=str+" "+temp;

console.log(str);


/* 4. Input a String S with a word, and replace character “a” with “x” and
display the result -
Input: “apple” Output: “xpple” */

let st="apple";
console.log(st.replace('a','x'));


/* 5. What string method can be used to convert string into array  
A string can be converted to an array with the split() method:

*/

let str2="abc def ghi";
let arr=str2.split(" ");
console.log(arr);

/* 6. What string method can be used to check the occurrence of a specified
text in a string? */

let str5=prompt(" Enter String? ");
let pos=-1;
let val=prompt(" Value wanted to search with");
pos=str5.search(val);
if(pos!=-1)
console.log(" Yes it Exists");
else
console.log(" No is doesnt found");



/* 7. How can you break a string to a newline in Javascript ? 
\n	New Line
*/

/* 8. Write a Javascript function to test whether the first character of a string
is lowercase. */

 let strrr=prompt(" Enter String ");
 if(str1[0]==str1[0].toUpperCase())
 console.log(" Upper case");
 else
console.log("Lower case");

/* 9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods.
How will you handle that ? */
 
let input=prompt(" Enter Input");
if(input.match(/yes/gi))
console.log(input);


/*  10. Given a String S, achieve following tasks
a) Convert the String into upper case.
b) Convert only the first character to uppercase.

c) Convert the String into lower case.
d) Break the string into two halves and swap them.
e) Count the repeating characters.
f) Reverse the string
 */


let s=prompt(" Enter String ");
console.log(`Upper case : ${s.toUpperCase()}`);
console.log(`Only First letter Upper Case : ${s[0].toUpperCase()}${s.slice(1)}`);
console.log(`Lower Case : ${s.toLowerCase()}`);

let leng=s.length;
let temp1=s.slice(0,leng/2);
 s=s.slice(leng/2);
 s+=temp1;
 console.log(s);

console.log(s.split("").reverse().join(""));
