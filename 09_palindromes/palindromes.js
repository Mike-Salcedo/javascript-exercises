const palindromes = function (word) {
  const originalWord = Array.from(word.toLowerCase());

  const reverseWord = Array.from(word.toLowerCase()).reverse();

  for (let i = 0; i < originalWord.length; i++) { // Checks if a single letter doesn't match in the array
    if (originalWord[i] !== reverseWord[i]) {
      return false;
    }
  }

  return true;
};

console.log(palindromes("Racecar"));

// Do not edit below this line
module.exports = palindromes;
