

let count = 0;


count = Number(count); 


increasebtn.onclick = function(){  //increment by 1
  count++;
  countlabel.textContent = count;
}


 decreasebtn.onclick = function(){ //decrement by 1
  count--;
  countlabel.textContent = count;
}


resetbtn.onclick = function(){ //reset to 0
  count = 0;
  countlabel.textContent = count;
} 
