/**
 * Question Name: Minimize the integer

Problem Statement

Antonio got a very large integer as his Christmas present from his parents. Antonio does not like large integers and hence decided to change a few digits of this integer and make it as small as possible
But changing too many digits will make Antonio's parents sad More formally if Antonio changes more than K digits of the integer, his parents will become sad Antonio does not want that to happen and hence will change at most K digits of the given integer
Also if the final integer contains any leading zeroes, Antonio's parents again become sad So Antonio will perform the K changes in such a way that the final integer does not contain any leadingoes
Given the integer Antonio got and K(maximum number of changes Antonio can
perform), print the minimum integer that Antonio can get.

Input Format

•  First line contains a single integer denoting the integer Antonio got as his Christmas present.
• Next line contains a single integer denoting K.

Output Format
. Print the minimum integer that Antonio can get.

Constraints
1 <= number of digits in the integer<=105
.1<=  K <= number of digits in the integer
Its guaranteed that the given Integer does not contain any leading zeros.

Sample Input 1

2399
2

Sample Output 1
1099

Explanation of Sample 1

Antonio can change the first digit to '1' and change the second digit to '0'. It can be proved that 1099 is the minimum possible integer that Antonio can get.
 */

// Function to return the minimized number
function minNum(num, k) {
  // Total digits in the number
  let len = num.length;

  // If the string is empty or there
  // are no operations to perform
  if (len == 0 || k == 0) {
    let num_str = num.join("");
    return num_str;
  }

  // "0" is a valid number
  if (len == 1) return "0";

  // If the first digit is not already 1 then
  // update it to 1 and decrement k
  if (num[0] != "1") {
    num[0] = "1";
    k--;
  }

  let i = 1;

  // While there are operations left
  // and the number can still be updated
  while (k > 0 && i < len) {
    // If the current digit is not already 0
    // then update it to 0 and decrement k
    if (num[i] != "0") {
      num[i] = "0";
      k--;
    }
    i++;
  }

  let num_str = num.join("");

  // Return the minimised number
  return num_str;
}

let num = "2399";
let k = 2;

console.log(minNum(num.split(""), k));
