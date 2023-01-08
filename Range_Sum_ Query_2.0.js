/**
 * Problem Statement

Amy has an array A of R-L+1 integers such that A1 = L, A2 = L+1, …. , AR-L+1 = R.
Anne gives her Q queries. Each query consists of two integers X and Y.
Anne wants Amy to check if there exists at least one subsequence in A, such that the sum of subsequence lies between X and Y (both inclusive).
You are given T independent test cases.

NOTE: Subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. You can erase any elements, not necessarily going successively. The remaining elements preserve their order.

Constraints

1 <= T <= 3
1 <= Q <= 105
1 <= L <= R <= 109
1 <= X<= Y <= 1018
All input values are integers.

Input Format

First-line contains T.
First line of each test case consists of a three space separated integers integer Q, L and R.
Next Q lines of each test case consists of two space separated integers X and Y.

Output Format
Print in a newline for each query: 1 if there exists a required subsequence otherwise print 0.

Sample Input 1

1

2 1 3

6 7

9 9

Sample Output 1

1
0

Explanation of Sample 1

For the 1st query, subsequence S = { A1, A2, A3} has sum 6 (A1+A2+A3 = 1+2+3 = 6). So, there is one possible subsequence whose sum lies between X = 6 and Y = 7.
 */

// Note: Text this solution in Online editor - https://www.jdoodle.com/execute-spidermonkey-online/

// Function candidate has to implement
function rangeSumQuery2(q, l, r, queries) {
  const A = [];
  for (let i = l; i <= r; i++) {
    A.push(i);
  }
  const results = [];
  for (let i = 0; i < q; i++) {
    const x = queries[i][0];
    const y = queries[i][1];

    let found = false;
    for (let j = 0; j < A.length; j++) {
      let sum = 0;
      for (let k = j; k < A.length; k++) {
        sum += A[k];
        if (sum >= x && sum <= y) {
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }
    if (found) {
      results.push(1);
    } else {
      results.push(0);
    }
  }
  return results;
}

//Driver Code
var t = readline();
while (t--) {
  var temp1 = readline().trim();
  var temp2 = temp1.split(" ");
  var q = Number(temp2[0]);
  var l = Number(temp2[1]);
  var r = Number(temp2[2]);
  var queries = [];
  for (i = 0; i < q; i++) {
    temp1 = readline().trim();
    temp2 = temp1.split(" ");
    var x = Number(temp2[0]);
    var y = Number(temp2[1]);
    queries.push([x, y]);
  }
  var num = rangeSumQuery2(q, l, r, queries);
  for (i = 0; i < num.length; i++) print(num[i]);
}
