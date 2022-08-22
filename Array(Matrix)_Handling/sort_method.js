// parameter를 넘기지 않고 그냥 sort 하면 Unicode 순으로 정렬된다.

let arr = [1000, 2, 3, 12, 59];

// 오름차순
// return 값이 음수 이면 첫번째 인자(left)가 우선된다.

arr.sort((left, right) => left - right);

console.log(arr);


// 내림차순
// return 값이 양수 이면 두번째 인자(right)가 우선된다.

arr.sort((left, right) => right - left);

console.log(arr);