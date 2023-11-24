function foo(arg) {
  arg();
}

foo(() => {
  console.log(1);
});

// 1. foo 실행
// 2. foo 함수는 arg 함수를 실행. (변수 아무넣고 안넣고)
// 3. bar 함수가 실행 됨 (변수에 아무넣고 안들어가고)
// 4. bar 가 실행되어 "bar" 가 출력됨
