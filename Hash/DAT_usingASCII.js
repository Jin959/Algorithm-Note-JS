// input = '2 3 4 6 3';
// dat = { a: 2, b: 3, c: 4, d: 6, e: 3}; // output, type === object

function dat(input) {
    let arr = [];
    let dat = new Object();
  
    arr = input.split(' ');
  
    for (let i = 0; i < arr.length; i++) {
        let asciiCode = 'a'.charCodeAt() + i;
        dat[String.fromCharCode(asciiCode)] = arr[i];
    }
  
    return dat;
  }