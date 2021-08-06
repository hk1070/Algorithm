function solution1(arr) {
  let answer = 1;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
}

function solution2(arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    if (x > max) {
      max = x;
      answer++;
    }
  }
  return answer;
}
let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution1(arr));
console.log(solution2(arr));
