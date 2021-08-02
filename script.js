const bDate = document.querySelector(".birth-date")
const luckyNo = document.querySelector(".lucky-No")
const checkBtn = document.querySelector(".ckeck-button")
const output = document.querySelector(".output")
const outImg = document.querySelector(".output-Image")


checkBtn.addEventListener("click", birthDateHandler)

function birthDateHandler(){
  const dob = bDate.value;
  const luck = luckyNo.value;
  
  const sum = calculateSum(dob);
  const comp = compareValue(sum, luck)
  
}
function calculateSum(dob){
  dob = dob.replaceAll("-","");
  let sum = 0;
  for (let i =0; i<dob.length; i++){
    sum = sum + parseInt(dob.charAt(i))
  }
  return  sum
}

function compareValue(sum, luck){
  if (luck%sum===0){
    output.innerHTML= "Hurrey! You are the Lucky Mate..."
    outImg.innerHTML = "<img src='./Lucky.jpg' width='300' height='200' />"

  }else{
    output.innerHTML = "uff Better Luck next life 😁"
    outImg.innerHTML = "<img src='./sad.jpg' width='200' height='300' />"
  }
}