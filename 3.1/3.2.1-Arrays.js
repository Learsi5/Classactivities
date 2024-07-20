// create an Array using an Array literal
const arr = ["red", "blue","yellow", "green"];

// access the 1st item in the Array
arr[0];

// access the last item in the Array
arr[3];

// print the length of the Array
console.log(arr.length);

// use the length property to access the last item in the Array
console.log(arr[arr.length -1]);

// with for...of, loop over the Array, modify the  current value and add to a different Array
const newArr = [];

for (let item of arr){
  item+= "";
  newArr.push(item);
}
