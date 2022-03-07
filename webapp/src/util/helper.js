
const initialRows = (limit) => {
  let r = [];
  for (var i = 0; i < limit; i++) { r.push(i+1); }
  return r;
};

const removeItemOnce = (arr, value, f) => {
  let index = f ? arr.indexOf(parseInt(value)) : arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

const removeAllGivenItems = (arr, rem,f) => {
  for (let i = 0; i < rem.length; i++) {
    removeItemOnce(arr, rem[i], f);
  }
  return arr;
};

export { initialRows, removeItemOnce, removeAllGivenItems };
