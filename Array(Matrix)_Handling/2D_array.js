const ROW = 4;
const COL = 3;

let arr = new Array(ROW);

for (let y = 0 ; y < ROW; y++) {
    arr[y] = new Array(COL);

    for (let x = 0; x < COL; x++) {
        arr[y][x] = x; // 0,1,2  * 3개
    }
}

for (let i = 0; i < ROW; i++) console.log(arr[i]);
