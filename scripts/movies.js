// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let moviesAmount = JSON.parse(localStorage.getItem("amount"))
// console.log(moviesAmount)
let h1 = document.createElement("h1")
h1.innerText = moviesAmount

document.querySelector("#navbar").append(h1)

movies_div = document.querySelector("#movies")

async function searchMovies(){
   
  
  try{
const query = document.getElementById("search").value;

//  const res =await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`);

const res =await fetch(` https://www.omdbapi.com/?s=${query}&apikey=fa1a44c3`);

const data = await res.json();
console.log("data:",data);

const movies = data.Search;

return movies;
// appendMovies(movies);
console.log("data:",data);
}catch (err){
console.log("err:",err)

}
}
function appendMovies(data){
  // if(data==undefined){
  //     return false;
  // }
  movies_div.innerHTML=null;
  data.forEach(function(el){
    
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = el.Poster
      let p = document.createElement("p");
       p.innerText=el.Title;
     let btn = document.createElement("button")
     btn.innerText = "Book Now"
     btn.addEventListener("click", function (){

      addToCart(el)
     })

     div.append(img,p,btn)
     movies_div.append(div);
  });
}

async function main(){
  let data = await searchMovies();
   if (data==undefined){
       return false;
   }
    appendMovies(data)
}

// Debouncing
let id;
function debounce (func,delay){
  if(id){
      clearTimeout(id);
  }
  id = setTimeout(function(){
      func()
  },delay);
}


// Add to cart button


function addToCart(el){

 addedMovies = []
//  console.log(el)
addedMovies.push(el)
localStorage.setItem("movie",JSON.stringify(addedMovies))
window.location.href = 'checkout.html'

}

