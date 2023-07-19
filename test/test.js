/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/
async function get(){
  const response = await fetch('https://api.github.com/users/Ahmad-Altamimi1/repos');
  const data = await response.json();
  console.log(data);

}



