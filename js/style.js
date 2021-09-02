   // 1. Ways to print in JavaScript
   // console.log("Hello");
   // alert("me");
   // document.write("This is Pragyan Gurung");

   // 2. JavaScript console API(application programming interface)
   // console.log("Hello World", 5 * 2, "Another Log");
   // console.warn("This is a warning");
   // console.error("This is an error");

   // 3. JavaScript variables
   // Variables: Container to store data values.
   var num1 = 20;
   var num2 = 10;
   // console.log(num1 + num2);

   /* 4. Data type in JavaScript: 
    At a very high level, there are two types of data types in JavaScript
    A. Primitive data types: undefine, null, number, string, boolean, symbol
    B. Reference data types: arrays and objects
    */

   // A. Primitive data types
   //Number
   var num3 = 234;
   var num4 = 234.234;

   //String
   // var str1 = "My name is Pragyan";
   // var srt2 = 'I live in Nepal';

   // Objects
   // var mark = {
   //     Sonam: 45,
   //     Rohan: 48.5,
   //     Samana: 38
   // }
   // console.log(mark);

   //Booleans
   // var a = true;
   // var b = false;

   //Undefine
   var n = undefined; //or var n; //If the value is not given then the output will be undefine
   var c = null; // Dont put anything in c variable

   // B. Reference data types
   // var arr = [1, 2, 3, "String", 4, 5];
   // console.log(arr);


   //5. Operators in JavaScript
   // a. Arithmetic operators 
   // var a = 60;
   // var b = 30;
   // console.log("This is the value of a + b:", a + b);
   // console.log("This is the value of a - b:", a - b);
   // console.log("This is the value of a * b:", a * b);
   // console.log("This is the value of a / b:", a / b);

   // b. Assignment Operators
   // var c = 30;
   // var d = c;
   // d += 2; //d = d + 2
   // d -= 2; //d = d - 2
   // d *= 2; //d = d * 2
   // d /= 2; //d = d / 2
   // console.log("The value of d:", d);

   // c. Comparison Operator
   // var e = 23;
   // var f = 43;
   // console.log(e == f);
   // console.log(e >= f);
   // console.log(e <= f);
   // console.log(e > f);
   // console.log(e < f);

   // d. Logical Operators
   // a. Logical AND
   // console.log(true && true); //until find the true
   // console.log(false && true);
   // console.log(true && false);
   // console.log(false && false);

   // e. Logical OR
   // console.log(true || true); // If find true in one variable then print true "OR"
   // console.log(false || true);
   // console.log(true || false);
   // console.log(false || false);

   // f. Logical NOT: Making something true as false vice vers
   // console.log(!false);
   // console.log(!true);

   //6. Functions in JavaScript
   // function arr(a, b) {
   //    return (a + b) / 2;
   // }

   // DRY = Do not repeat yourself
   // c1 = arr(10, 20);
   // c2 = arr(30, 40);
   // console.log("The two average value are:",c1,",", c2);


   //7. Condition in JavaScript
   // a. If Else
   // var age= 30;
   // if (age>18){
   //    console.log("You are not kid");
   // }
   // else{
   //    console.log("You are kid");
   // }
   // var age = 41;
   // if (age > 40) {
   //    console.log("You are old");
   // } else if (age > 30) {
   //    console.log("You should get marry");
   // } else if (age > 18) {
   //    console.log("You are adult");
   // } else {
   //    console.log("Your are under age, you are a kid");
   // }
   // console.log("End of ladder");


   // b. For loop
   // var arr = [1, 2, 3, 4, 5, 6, 7];
   // console.log(arr);
   // for (var i=0;i<arr.length;i++){
   //    console.log(i);
   // }

   // for each
   // arr.forEach(function (element) {
   //    console.log(element);
   // })

   //c. While loop
   // let j = 0;
   // while (j < 10) {
   //    console.log(j+1);
   //    j++;
   // }

   // Do While loop
   // let y = 4;
   // do{
   //    console.log("I am Iron-man")
   //    y--;
   // }while(y>1);