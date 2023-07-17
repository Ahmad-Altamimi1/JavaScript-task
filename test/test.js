/*
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON 
  ===================================================
  = Text Based Format        
  = Lightweight              
  = Does Not Use Tags        
  = Shorter              
  = Can Use Arrays           
  = Not Support Comments        
  ===================================================
*/
// {
//     "string": "Elzero",
//     "number": 100,
//     "object": { "EG": "Giza", "KSA": "Riyadh" },
//     "array": ["HTML", "CSS", "JS"],
//     "boolean": true,
//     "null": null
//   }
let names =  {
    "string": "Ahmad",
    "number": 100,
    "object": { "jor": "Irbid", "Uae": "Alshargh" },
    "array": ["HTML", "CSS", "JS"],
    "boolean": true,
    "null": null
  }
// API  هو الوسيط بعملية الشير وبحدد شو يضهرلك وشو ما يضهرلك 
//  public and privet api
//  عباره عن json object المتاح ألك
/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

// Get From Server
const myJsonObjectFromServer = '{"Username": "Ahmad", "Age": 19}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// Convert To JS Object
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);    

// Update Data
myJsObject["Username"] = "Mohammad";
myJsObject["Age"] = 20;

// same in localStorage 
// Send To Server
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);
  
JSON 
// opearation 1 :Parsing JSON: To convert a JSON string into a JavaScript object
// JSON.parse() method. It takes a JSON string as input and returns the corresponding JavaScript object.
const jsonString = '{"name": "John", "age": 30}';
console.log(typeof(jsonString));
console.log(jsonString);
const obj = JSON.parse(jsonString);
console.log(obj.name); // Output: John
console.log(obj.age); // Output: 30
console.log(obj);
console.log(obj[0])
// opearation 2 :to create a JSON string from a JavaScript object, you can use the JSON.stringify() method.
//  It takes a JavaScript object as input and returns the corresponding JSON string.

const obj2 = {
    name: 'John',
    age: 30,
  };
  const jsonString2 = JSON.stringify(obj2);
  console.log(jsonStrinvscode-file://vscode-app/c:/Users/Orange/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlg2); // Output: {"name":"John","age":30}

//  opearation 3 : Modifying JSON: Since JSON represents data as key-value pairs, 
// you can modify (تعديل) a JavaScript object and then convert it back to JSON using JSON.stringify().

const jsonString3 = '{"name": "John", "age": 30 , "adress": "irbid"}';
const obj3 = JSON.parse(jsonString3);
obj3.age = 31;
const updatedJsonString = JSON.stringify(obj3);
console.log(updatedJsonString); // Output: {"name":"John","age":31}

//opearation 4 :Accessing JSON properties: Once you have a JavaScript object from JSON, 
// you can access its properties using dot notation or array indexing.
console.log(obj3.adress);


// JS object