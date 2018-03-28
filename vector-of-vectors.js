let sampleVector = [['quick', 'lazy'], ['brown', 'black', 'grey'], ['fox', 'dog']];

function printWordCombinations(vector) {
  let totalCombinations = 1;
  let currentIndex = [];
  let result = [];

  for (let j = 0; j < vector.length; j++) {
    totalCombinations *= vector[j].length;
    currentIndex[j] = 0;
  }

  for (let i = 0; i < totalCombinations; i++) {
    let increment = 1;
    result[i] = '';
    for (let j = 0; j < vector.length; j++) {
      result[i] += vector[j][currentIndex[j]] + ' ';
      if ((currentIndex[j] += increment) == vector[j].length) {
        currentIndex[j] = 0;
      }
      else {
        increment = 0;
      }
    }
  }
  console.log(result);
};

printWordCombinations(sampleVector);
