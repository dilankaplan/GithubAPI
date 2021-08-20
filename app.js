const githubForm = document.getElementById("github-form");
const nameInput =document.getElementById("githubname");
const clearLastUsers= document.getElementById("clear-last-users");
const lastUsers =document.getElementById("last-users");
const github= new Github();

eventListener();

function eventListener(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearch);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}
function getData(e){
  let username = nameInput.value.trim();
  if(username === ""){
      alert("Lütfen geçerli bir kullanıcı adı giriniz.");
  }
  else{
     github.getGithubData(username)
     .then(response=> {
         if(response.user.message === "Not Found"){
             console.log("Hata");
         }
         else{
             console.log(response);
         }
     })
     .catch(err=>console.log(err));
  }


    e.preventDefault();
}
function clearAllSearch(){

}
function getAllSearched(){

}