/*
Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.

Examples
input:    "CodeWars" => "CdWr oeas"
           ||||||||      |||| ||||
indices:   01234567      0246 1357
Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
Odd indices are 1, 3, 5, 7, so the second group is "oeas".
And the final string to return is "Cdwr oeas".


*/
function sortMyString(S) {
  let even = ''
  let odd = ''
  
  for (let i = 0; i < S.length; i++) {
    i == 0 || i % 2 == 0 ? even += S[i] : odd += S[i]
  }
  
  return `${even} ${odd}`
}