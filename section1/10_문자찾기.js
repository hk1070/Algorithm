// 방법 1
function solution(str, t) {
  let answer = 0;
  for (let x of str) {
    if (x === t) answer++;
  }
  return answer;
}
// 방법 2
function solution2(str, t) {
  let answer = str.split(t).length;
  return answer - 1;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
console.log(solution2(str, 'R'));
