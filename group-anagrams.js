/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = (strs) => {
  const anagrams = {};
  strs.forEach((str) => {
    // Sort the string to use as a key
    const key = str.split("").sort().join("");

    // Add the string to the corresponding list in the hashmap
    if (!anagrams[key]) {
      anagrams[key] = [];
    }
    anagrams[key].push(str);
  });

  // Return the values of the hashmap
  return Object.values(anagrams);
};

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
