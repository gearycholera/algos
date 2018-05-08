var insertionSort = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    var temp = nums[i];
    var j = i - 1;
    while (j > -1 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = temp;
  }
  return nums;
}

console.log(insertionSort([10,2,6,3,9,29,4,5]));