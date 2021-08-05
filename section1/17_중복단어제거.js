function solution(str) {
  let answer;
  // console.log(str.indexOf('time'));
  answer = str.filter((v, i) => {
    return str.indexOf(v) === i;
  });

  return answer;
}

let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
