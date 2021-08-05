/* indexOf()
    참조: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
          https://bomango.tistory.com/46
*/

function solution(str) {
  let answer = '';
  // console.log(str.indexOf('k'));
  for (let i = 0; i < str.length; i++) {
    //console.log(str[i], i, str.indexOf(str[i]));
    if (str.indexOf(str[i]) === i) answer += str[i];
  }

  return answer;
}

// 같은 문자 개수 찾기
function solution2(str) {
  let answer = 0;
  let pos = str.indexOf('k');
  while (pos !== -1) {
    answer++;
    pos = str.indexOf('k', pos + 1);
  }
  return answer;
}
let str = 'ksekkset';
console.log(solution(str));
console.log(solution2(str));
