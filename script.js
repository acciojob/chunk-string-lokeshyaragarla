/**
 * Splits a string into chunks of a specified length.
 * @param {string|null} str - The input string to be chunked.
 * @param {number} chunkLength - The desired length of each chunk.
 * @returns {string[]} An array of chunked strings.
 */
function chunkString(str, chunkLength) {
  // If the input string is null, return an empty array
  if (str === null) return [];

  const result = [];

  // Loop through the string in increments of chunkLength
  for (let i = 0; i < str.length; i += chunkLength) {
    // Slice the string from i to i + chunkLength and push to the result
    result.push(str.slice(i, i + chunkLength));
  }

  return result;
}

// ✅ Example Usage:
console.log(chunkString("Hello, world!", 5)); // ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2));         // ["12", "34", "5"]
console.log(chunkString("abc", 5));           // ["abc"]
console.log(chunkString(null, 3));            // []