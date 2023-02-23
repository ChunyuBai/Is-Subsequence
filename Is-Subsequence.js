/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code? */


//Solution:
/* Logic: 
1. set 2 position for 2 strings
2. loop 2 strings 
3. if the first string position char is equal to the second position char then let both position += 1;
4. if not equal then only plus the second position;
5. get the final position of both strings 
6. use first position to compare with the first string length, if they equal means the first string is subsequence of the second string, if not then return false.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
  let positionS = 0;
  let positionT = 0;
  while(positionS < s.length && positionT < t.length) {
      if(s[positionS] == t[positionT]) {
          positionS += 1;
          positionT += 1;
      } else {
          positionT += 1;
      }
  }
  if(positionS === s.length) {
      return true
  } else {
      return false
  }
};