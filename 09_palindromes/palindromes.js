const palindromes = function (word) {
  let wordOnlyLetters = word.replace(/[^A-Z0-9]/gi, ""); // Removes alls spaces and special characters from a string

  const originalWord = Array.from(wordOnlyLetters.toLowerCase());

  const reverseWord = Array.from(wordOnlyLetters.toLowerCase()).reverse();

  for (let i = 0; i < originalWord.length; i++) {
    // Checks if a single letter doesn't match in the array
    if (originalWord[i] !== reverseWord[i]) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
