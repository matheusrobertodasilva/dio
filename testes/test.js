let count = 0;

function cc(card) {
  if (card <= 6) 
    count++;
  else if (card >="10")
    count--;
  return count + (count > 0 ? ' Bet' : ' Hold');
}

console.log(cc(7)); 
console.log(cc(2)); 
console.log(cc(3)); 
console.log(cc('K')); 
console.log(cc('A'));