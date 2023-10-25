const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  let verticalString = '';

  if(letters.length === 0 || word.length === 0){
    return null;
  }

  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (let i = 0; i < letters[0].length; i++) { 
    for (let k = 0; k < letters.length; k++) { 
        verticalString += (letters[k][i])
    }
  }

  if(verticalString.includes(word)){
    return true;
  }

  return false;
};

module.exports = wordSearch;
