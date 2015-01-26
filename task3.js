
function *flat(arr) {
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (item instanceof Array) {
      yield *flat(item);
    } else {
      yield item;
    }
  }
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
  console.log(f);
}
// 1 2 3 4 5 6
