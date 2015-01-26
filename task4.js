"use strict";

function *upper (items) {
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    try {
      yield item.toUpperCase();
    } catch(err) { yield null; }
  }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
// want to log: A, B, null, C
