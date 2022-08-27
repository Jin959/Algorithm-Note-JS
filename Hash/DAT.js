let alpha = [];
let data = new Object;

/*
 input something like 
 = `A 43
 B 41
 C 543 ... so on `;
*/

function makeDAT(input) {
    // parsing
    let tmp = input.split('\n');
    for (let i = 0; i < tmp.length; i++) {
        let tmp2 = tmp[i].split(' ');

        // make DAT Idx
        alpha[i] = tmp2[0];

        // make DAT
        let value = tmp2[1];
        data[alpha[i]] = parseInt(value);
    }

    return;
}

// get value
function usageOfDAT(idx) {
    // get idx(key) like 'A', 'B', ...
    let value = data[idx]

    return  value;
}

    

// when the query is 'find maximum sum of two ele'
function usingDAT() {
    let maxSum = -987;
    let maxDots = '';

    for (let i = 0; i < alpha.length; i++) {
        for (let j = i + 1; j < alpha.length; j++) {
            let sum = data[alpha[i]] + data[alpha[j]];

            if (sum > maxSum) {
                maxSum = sum;
                maxDots = alpha[i] + alpha[j]; // type is String
            }
        }
    }

    return maxDots
}