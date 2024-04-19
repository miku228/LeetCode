/**
 * URL : https://leetcode.com/problems/valid-perfect-square/description/
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 1;
    let right = num;
    let center;
    let regexp = new RegExp(/^[-]?([1-9]\d*|0)$/);

    if(num < 1) return false;
    if(num == 1) return true;

    while(left <= right){
        center = (right - left)/2 + left;
        center = Math.trunc(center);

        console.log(`Right: ${right} `);
        console.log(`Left: ${left} `);
        console.log(`Center: ${center} `);
        console.log(`Num: ${num} `);
        console.log(`(center ** 2): ${(center ** 2)} `);
        console.log(`(center ** 2) ===  num: ${(center ** 2) ===  num} `);

        if((center ** 2) ===  num){
            // return regexp.test(center);
            return true;
        }else if((center ** 2) > num ){
            right = center - 1;
        }else if((center ** 2) < num){
            left = center + 1;
        // }else{
        //     // console.log(`Center: ${center} `);
        //     // return regexp.test(center);
        //     return true;

        };


    // if (num < 1) {
    //     return false;
    // }
    // if (num === 1) {
    //     return true;
    // }
    // let left = 1;
    // let right = num;
    // while (left <= right) {
    //     let mid = Math.floor((left + right) / 2);
    //     if (mid * mid === num) {
    //     return true;
    //     } else if (mid * mid > num) {
    //     right = mid - 1;
    //     } else if (mid * mid < num) {
    //     left = mid + 1;
    //     }
    // }
    // return false;



    };
    return false;

};
