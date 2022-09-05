const palindromes = function (a) {
  /* ---first try ---
     turn string into array
     reverse array
     turn array into new string
     if new string === string
     return true
     else 
     return false
     ---second try---
      take out symbols from new string
      turn string into array
           turn it all lowercase

     reverse array
     turn array into new string
   
     if new string === string
     return true
     else 
     return false 
     
     DONE!!
     */

  const lettersLowerCase = a.toLowerCase();
  console.log(lettersLowerCase);
  const onlyLetters = lettersLowerCase.replace(/[^a-z0-9 -]/gi, " ");
  console.log(onlyLetters);
  const noSpaces = onlyLetters.replace(/ /g, "");
  console.log(noSpaces);
  const myarr = [...noSpaces];
  console.log(myarr);
  const rmyarr = myarr.reverse();
  console.log(rmyarr);
  const joinArr = rmyarr.join("");
  console.log(joinArr);
  if (noSpaces === joinArr) {
    return true;
  } else {
    return false;
  }
};
palindromes("Anita lava.% la tina!");
// Do not edit below this line
module.exports = palindromes;
