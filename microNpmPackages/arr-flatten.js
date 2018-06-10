// flatten(['a', ['b', ['c']], 'd', ['e']]);
//=> ['a', 'b', 'c', 'd', 'e']

function flatten(arr,res) {
    var temp = res||[],car;
    var len = arr.length;
    for (var i=0; i < len; i++) {
        car = arr[i];
        if (!Array.isArray(car)) {
            temp.push(car);
        } else {
            flatten(car,temp);
        }
    }
    return temp;
}
console.log(flatten(['a', ['b', ['c']], 'd', ['e']]))