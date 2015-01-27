function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function askBar () {
  return new Promise(function (resolve, reject) {
    resolve('bar');
  });
}

function run (generator) {
  var it = generator();

  function go(res) {
    if (res.done) {
      return;
    } else {
      return res.value.then(function (value) {
        return go(it.next(value));
      }, function (error) {
        return go(it.throw(error));
      });
    }

  }

  go(it.next());
}

run(function* () {
  // improve: errors?
  // console.log('run1');
  var foo = yield askFoo();
  // console.log('run2');
  console.log(foo);
  // var bar = yield askBar();
  // console.log('run3');
  // console.log(bar);
});