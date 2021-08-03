//  방법 1
function solution(str) {
  let answer = '';
  for (let x of str) {
    if (x === 'A') answer += '#';
    else answer += x;
  }
  return answer;
}
// 방법 2
function solution2(str) {
  let answer = str;
  answer = str.replace(/A/g, '#');
  return answer;
}

let str = 'BANANA';
console.log(solution(str));
console.log(solution2(str));
