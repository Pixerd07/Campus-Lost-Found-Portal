const lostCount = document.getElementById("lostCount");

const foundCount = document.getElementById("foundCount");

const lostItems = JSON.parse(

  localStorage.getItem("lostItems")

) || [];

const foundItems = JSON.parse(

  localStorage.getItem("foundItems")

) || [];

if(lostCount){

  lostCount.innerText = lostItems.length;

}


if(foundCount){

  foundCount.innerText = foundItems.length;

}