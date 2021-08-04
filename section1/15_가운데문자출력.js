// substring(시작순서,끝순서)
// substr(시작순서,개수)
// 시작순서만 쓰면 시작순번부터 끝까지 문자열을 가져옴

function solution(str) {
  let answer;
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 == 1) answer = str.substring(mid, mid + 1);
  else answer = str.substring(mid - 1, mid + 1);
  return answer;
}
let str = 'length';
console.log(solution(str));
