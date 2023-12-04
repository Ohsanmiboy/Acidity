function solution(numer1, denom1, numer2, denom2) {
  let numer = numer1 * denom2 + numer2 * denom1; // 분수 1의 분자, 분수 2의 분자에 각각 2의 분모, 1의 분모를 곱함
  let denom = denom1 * denom2; // 분모끼리 곱함

  // 1. 유클리드 호제법으로 최대공약수 구하기
  const euclid = (small, big) => {
    let gcd = 0;

    for (let i = 2; i < small; i++) {
      if (big % i == 0) gcd = i;
    }

    return gcd;
  };

  let gcd = 0; // 이 gcd는 euclid 함수 내의 gcd와 다른 변수임
  if (denom1 > denom2) gcd = euclid(denom2, denom1);
  else gcd = euclid(denom1, denom2);

  // 2. 분자 분모를 최대 공약수로 나누기
  return [numer / gcd, denom / gcd];
}

console.log([1, 2, 3, 4, 5, 6, 7].fill(10, 1));

// 세가지임
// 1. 유클리드 자체를 이해를 잘못했음
// 2. 배열으로 출력하라는 것을 잘못함
// 2-1. 배열로 출력해야하는데 나누어버림 -> // let result =  (numer/gcd) / (denom / gcd)
// 2-2. 배열 초기화 (배열 만들기)가 아직 익숙치 않음 -> 마지막 return에 적은 것처럼 그냥 [] 속에 ,로 구분해서 넣어주면 배열 만들어짐

// Array.from(result); -> 이거는 result를 배열로 만드는 함수인데 여기서 쓸 거는 아님
//다 풀어놓고 괄호만 해주면 되는걸 코드를 더쓴거네요? 아 유클리드 이해를 잘못했구나

// function reculsion() {
//   return reculsion(); // <- 이렇게 리턴으로 본인 호출하면 재귀인데, 이거는 for문 익숙해지고나서부터 시작해야 해
//   // 재귀함수가 for문보다 어려운거야
// }
//알겠습니당

// for (let i = 0; i < numbers.length ; i++) {
//     numbers[i] = numbers[i] * 2
// }
