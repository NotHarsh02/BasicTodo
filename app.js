const addbtn = document.querySelector("#add");
const stuff =document.querySelector("section");
const form= document.querySelector("form");
function c(string) 
{
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
form.addEventListener("submit",e=>{
    e.preventDefault();
    console.log("it freaking worked")
    let text =document.createElement('li');
    let btn=document.createElement('button');
    text.innerText=c(form.elements.content.value);
    stuff.append(text);
    form.elements.content.value='';
});