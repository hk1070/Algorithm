// 방법 1
function solution(arr) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;
  // min = arr[0] 으로도 가능

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}
let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

// 방법 2
function solution2(array) {
  let answer = Math.min(...array);
  return answer;
}
let array = [5, 7, 3, 9, 11, 18, 55];
console.log(solution2(array));
