var list = [{
        checkline: 'X13路',
        completenum: 2
    },
    {
        checkline: '13路',
        completenum: 3
    },
    {
        checkline: '25路',
        completenum: 2
    },
    {
        checkline: 'X13路',
        completenum: 6
    },
    {
        checkline: 'X13路',
        completenum: 6
    },
    {
        checkline: '10路',
        completenum: 2
    },
    {
        checkline: '13路',
        completenum: 6
    },
    {
        checkline: 'X13路',
        completenum: 6
    }
];
for (var i = 0; i < list.length; i++) {
    for (var j = i+1; j < list.length; j++) {
        if (list[i].checkline === list[j].checkline) {
            list[i].completenum =   list[i].completenum + list[j].completenum;
            list.splice(j, 1)
            j--;
        }
    }
}
console.log(list)