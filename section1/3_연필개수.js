// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math

/* 
      Math.ceil(2.111) -> 3
      Math.floor(2.111) -> 2
      Math.round(2.6) -> 3 
      Math.sqrt(64) -> 8 
      */

// 방법 1
function solution(n) {
  let answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution(25));
console.log(solution(178));
console.log(solution(211));

// 방법 2
function solution2(n) {
  let answer = Math.floor(n / 12) + 1;
  return answer;
}

console.log(solution2(25));
console.log(solution2(178));
console.log(solution2(211));
