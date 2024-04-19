/**
 * https://leetcode.com/problems/isomorphic-strings/description/
 * cannot solve
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // let result = false;
    // let s_arr = s.split('');

    // for(let i = 0; i < arr.length; i++) {

    // }

    // return result;


    let map1 = new Array(128).fill(0);  // Stores frequency of s
    let map2 = new Array(128).fill(0);  // Stores frequency of t

    for (let i = 0; i < s.length; i++) {
        let sCh = s.charCodeAt(i);
        let tCh = t.charCodeAt(i);
        console.log(`sCh: ${sCh} `);
        console.log(`tCh: ${tCh} `);
        console.log(`map1: ${map1} `);
        console.log(`map2: ${map2} `);

        if (map1[sCh] === 0 && map2[tCh] === 0) {
            map1[sCh] = tCh;
            map2[tCh] = sCh;
        } else if (map1[sCh] !== tCh || map2[tCh] !== sCh) {
            return false;
        }
    }
    return true;

};
