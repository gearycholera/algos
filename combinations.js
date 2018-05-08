const combs = (arr, lim) => {
  let all = [];
  const recurse = (left, src, curr, all) => {
    if (left === 0 && curr.length === lim) {
      all.push(curr);
    }
    else {
      for (var i = 0; i < src.length; i++) {
        recurse(left - 1, src.slice(i + 1), curr.concat([src[i]]), all)
      }
    }
    return;
  }
  recurse(lim, arr, [], all);
  return all;
}