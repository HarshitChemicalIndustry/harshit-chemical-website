// ===== Harshit Mart App =====

let searchBox = document.getElementById("searchBox");

if(searchBox){
searchBox.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let cards=document.querySelectorAll(".product-card");

cards.forEach(function(card){

let name=card.querySelector("h3").innerText.toLowerCase();

if(name.indexOf(value)>-1){
card.style.display="flex";
}else{
card.style.display="none";
}

});

});
}
