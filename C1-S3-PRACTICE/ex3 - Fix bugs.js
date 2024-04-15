// THE CONTEXT
// In the provided code, there's a function named findAverage that calculates the average of numbers in an array.
// The findAverage function takes an array of numbers as a parameter.

// THE PROBLEM
// There's a bug in the implementation of the findAverage function that causes it to produce incorrect results ( it displays NaN)

// YOUR JOB
// Your task is to identify and fix the bug in the findAverage function to ensure that it correctly calculates the average of numbers in the array.

// TIPS
// You should use the DEBUGGER and execute step by step the function iterations.
function findAverage(numbers) {
  if (numbers.length == 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) {
    if (typeof numbers[i] == "number" && !isNaN(numbers[i])) {
      sum += numbers[i];
    }
  }
  return sum / numbers.length;
}

let scores = [85, 90, 75, 95, 80];
let averageScore = findAverage([]);
console.log("Average score:", averageScore);

// lỗi NaN: trong trường hợp xử lý phát sinh ra NaN
// Các cách để phát sinh NaN
// Lấy số 0 chia cho số 0
// Lấy vô cùng (infinity) chia cho vô cùng (infinity)
// Nhân vô cùng (infinity) với số 0
// Bất kỳ phép tính toán nào trong đó NaN là một toán hạng
// Chuyển đổi một xâu non-numeric hoặc undefined về dạng number
