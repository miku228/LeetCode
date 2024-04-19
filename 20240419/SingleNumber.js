/**
 *URL https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // if(nums.length < 0) return false;
    // if(nums.length = 1) return nums[0];
    let uniquenums = nums.filter((x, i, self) => {
        // return nums.findIndex(num => num === x)
        return self.indexOf(x) == self.lastIndexOf(x);
    })
    console.log(`uniquenums: ${uniquenums} `);
    return uniquenums[0];

    // ******************
    // better solution
    // ******************
    // since XOR cancelling the same number it works
    // let result = 0;
    // for (let num of nums) {
    //     result ^= num;
    // }
    // return result;

};
