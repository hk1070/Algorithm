/* 참조
  toUpperCase(): 문자열을 대문자로 변환
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/  String/toUpperCase
  
  toLowerCase(): 문자열을 소문자로 변환
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/  String/toLowerCase
*/

function solution(str) {
  let answer = 0;
  for (let x of str) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}
