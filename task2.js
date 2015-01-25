function *factorial(n) {
  var res = 1;
  yield res;
  for (var i = n; i > 1; i--) {
    res *= i;
    yield res;
  }
}

for (var n of factorial(5)) {
  console.log(n);
}
// 1, 5, 20, 60, 120