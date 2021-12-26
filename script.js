const cat_btn=document.getElementById('cat_btn');
const cat_result=document.getElementById('cat_result');
const dog_result=document.getElementById('dog_result');
const dog_btn=document.getElementById('dog_btn');


cat_btn.addEventListener('click',getRandomCat);

//is user click on button ,it should call an callback function getRandomDog
dog_btn.addEventListener('click',getRandomDog);

function getRandomCat(){
 fetch('https://aws.random.cat/meow').
 then((res)=>res.json())
 .then((data)=>{
      // console.log(data);
      cat_result.innerHTML=`<img src="${data.file}" alt="cat" width="400" height="200">`;

  }).catch((err)=>{
      console.log(err);
  });
}

function getRandomDog(){
fetch("https://random.dog/woof.json")
.then((res)=>res.json())
.then((data)=>{
  console.log(data);
  //checking if the data contains .mp4 then display video else display image
  if(data.url.includes("mp4")){
    dog_result.innerHTML=`<video width="400" height="200" controls>
    <source src="${data.url}" type="video/mp4">
    </video>`;
  }
  else{
    dog_result.innerHTML=`<img src="${data.url}" alt="dog" width="400" height="200">`;
  }
}).catch((err)=>{
  console.log(err);
});
}
