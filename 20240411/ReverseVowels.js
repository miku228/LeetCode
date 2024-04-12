/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var reversedString = '';

    var newS = '';

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let stringArray = s.split('');

    let vowelsinS = [];

    let count = 0;

    for (let i = 0; i < stringArray.length; i++) {

        let v  = vowels.filter(function(vowel){
            return vowel === stringArray[i];
        })
        // when the char isn't vowels
        if(v.length === 0 ) {
            reversedString +=  stringArray[i];

        }else{

            reversedString +=  String(count);
            vowelsinS.push(v[0]);
            count++;
        }

    }

    let reversedvowelsinS = vowelsinS.reverse();
    let vowelsCount = reversedvowelsinS.length;
    let count02 = 0;
    // console.log(reversedString.length);

    for (let i = 0; i < reversedString.length; i++) {
        const char = reversedString.charAt(i);
        // console.log(`Character at index ${i}: ${char}`);
        // console.log(String(vowelsCount - vowelsCount + count02));
        if(char==String(vowelsCount - vowelsCount + count02)){
            // console.log(char);
            newS += reversedvowelsinS[vowelsCount - vowelsCount + count02];
            count02++;

        }else{
            newS += char;
        }

    }

    return newS;
};
