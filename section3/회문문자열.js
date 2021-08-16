// 방법 1
function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  let len = s.length;
  for (i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) return 'NO';
  }
  return answer;
}

// 방법 2
function solution2(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  //console.log(s.split('').reverse().join(''));
  if (s.split('').reverse().join('') !== s) return 'NO';
  return answer;
}

let str = 'gooG';
console.log(solution(str));
console.log(solution2(str));
