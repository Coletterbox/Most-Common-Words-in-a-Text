// "text" is a string
// returns an array

function mostCommonThreeWords(text) {
  var wordArray = text
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\//g, "")
    .split("\n")
    .join(" ")
    .split(", ")
    .join(" ")
    .split(" ")
    .sort()
    .filter(function(el) {
      return el != null && el !== "" && el !== "'";
    });
  var wordList = [];
  var wordCount = [];
  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i] !== wordArray[i - 1]) {
      wordList.push(wordArray[i]);
      wordCount.push(1);
    } else {
      wordCount[wordCount.length - 1]++;
    }
  }
  var frequencies = wordCount.slice(0, wordCount.length);
  frequencies = frequencies.sort((a, b) => b - a);
  var mostFrequent = [];
  if (frequencies.length > 0) {
    mostFrequent.push(wordList[wordCount.indexOf(frequencies[0])]);
  }
  if (frequencies.length > 1 && frequencies[1] === frequencies[0]) {
    mostFrequent.push(wordList[wordCount.lastIndexOf(frequencies[1])]);
  }
  if (frequencies.length > 1 && frequencies[1] !== frequencies[0]) {
    mostFrequent.push(wordList[wordCount.indexOf(frequencies[1])]);
  }
  if (frequencies.length > 2 && frequencies[2] === frequencies[1]) {
    mostFrequent.push(wordList[wordCount.lastIndexOf(frequencies[2])]);
  }
  if (frequencies.length > 2 && frequencies[2] !== frequencies[1]) {
    mostFrequent.push(wordList[wordCount.indexOf(frequencies[2])]);
  }
  return mostFrequent;
}
