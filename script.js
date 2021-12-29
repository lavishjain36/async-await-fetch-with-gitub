//select both the target with html elements
const fetchDataBtn=document.querySelector('#fetchdata');
const result=document.querySelector('#result');

//Get the data from an api and set the contents of the result div accordingly
async function getData(){
result.innerHTML="Loading...";
try{
const res=await fetch('https://api.github.com/users/lavishjain36')
const jsonResult=await res.json();
result.innerHTML=`
<div class="card">
<div class="card-body">
<h5 class="card-title">${jsonResult.name}</h5>
<h6 class="card-subtitle mb-2 text-muted">${jsonResult.bio}</h6>
<p class="card-text">${jsonResult.location}</p>
<a href="${jsonResult.html_url}" class="card-link">Github Profile</a>
</div>
</div>
`;
}catch(error){
    result.innerHTML=error;
}
}


fetchDataBtn.addEventListener('click',getData);
