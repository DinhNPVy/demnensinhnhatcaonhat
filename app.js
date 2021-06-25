// mảng
let arr = [];

for (let i = 0; i <= 5; i++) {
    arr[i] = +prompt("Nhập phàn tử thứ " + i);
}

arr.sort(function (a, b) {
    return b - a
})
document.write(arr);
// 1 2 3 4 4
// 4 4 3 2 1
function countMax(arr) {
    value = true;
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1]) {
            break;
        } else {
            value = false;
            count++;
        }

    }
    if (value) {
        return 1;
    } else {
        return count;
    }
}

document.write("Count = " + countMax(arr));