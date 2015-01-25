function *range(from, to) {
  var i = from;
  while (i <= to) { yield i++; }
}

for (var r of range(5, 10)) {
    console.log( r );
}
