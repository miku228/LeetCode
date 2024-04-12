/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

//  function isBadVersion(version){
//     let isBad = false;


//     return isBad;

//  }

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    return function(n) {
        let firstVersion = 0;
        let center = parseInt(n/2);
        // console.log('center number:')
        // console.log(center);
        if(center < 1) {
            firstVersion = 1;
        }else{
            console.log('Boolean center number:')
            console.log(isBadVersion(center));
            // start from center to start
            if(isBadVersion(center)){
                for(let i = center; i >= 0; i--){
                    // console.log(i);
                    if(!isBadVersion(i)) {
                        // console.log(i);
                        firstVersion = i+1;
                        break;
                    }
                }
            }else{
            // start from center to end
                for(let i = center-1; i <= n; i++){
                    // console.log(i);
                    if(isBadVersion(i)){
                        firstVersion = i;
                        break;
                    }
                }
            }
        }

        return firstVersion;


    };
};


// ****** solution
public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int start = 1;
        int end = n;
        int badVersion = 1;

        while(start <= end){
            int mid = start + (end - start )/2;
            if(isBadVersion(mid)){
                badVersion = mid;
                end = mid - 1;
            }else {
                start = mid + 1;
            }
        }
        return badVersion;
    }
}
