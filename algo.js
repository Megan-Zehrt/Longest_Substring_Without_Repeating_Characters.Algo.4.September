// 3. Longest Substring Without Repeating Characters



// Given a string satisfies, find the length of the longest substring without repeating chatacters.









/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    
    let set = new Set()
    let j = 0
    let maxSub = 0

    for(let i = 0; i < s.length; i++){

        while(set.has(s[i])){
            set.delete(s[j])
            j++
        }
        set.add(s[i])
        maxSub = Math.max(maxSub, i - j + 1)
    }
 return maxSub
}
