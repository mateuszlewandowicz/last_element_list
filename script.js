const ulList = document.createElement('ul');
document.body.appendChild(ulList);
let number = 4;

for(let i = 1; i<number; i++){
  const liItem = document.createElement('li');
  ulList.appendChild(liItem).textContent = i;
}

const lastLi = document.querySelector('li:last-child');
lastLi.innerText ='Ostatni element';