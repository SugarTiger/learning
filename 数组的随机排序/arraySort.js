// 1
var arr1 = [1, 'sdf', 3, 4, 'lizefei', false, 7, 8];
arr1.sort(function (a, b) {
    return Math.random() - 0.5;
});
console.log('arr1:  ', arr1);

// 2

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
function randSort1(arr) {
    for (let i = 0; i < arr.length; i++) {
        let rand = parseInt(Math.random() * arr.length);
        [arr[i], arr[rand]] = [arr[rand], arr[i]];
    }
    return arr;
}
console.log('arr2:  ', randSort1(arr2));