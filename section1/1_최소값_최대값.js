function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;

  return answer;
}
console.log(solution(9, 11, 4));

// Math.min(), Math.max()
console.log(Math.min(9, 11, 4));
console.log(Math.max(9, 11, 4));

const array1 = [3, 9, 22, 11, 57, 2];

// 최소값
const min1 = Math.min(...array1);
console.log(min1);

const min2 = array1.reduce((prev, curr) => (prev > curr ? curr : prev));
console.log(min2);

// 최대값
const max1 = Math.max(...array1);
console.log(max1);

const max2 = array1.reduce((prev, curr) => (prev > curr ? prev : curr));
console.log(max2);
