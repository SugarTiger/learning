
var fs = require('fs');

// 小文件拷贝：读取到内存中
function smallCopy(src, dst) {
    fs.readFile(src, (err, data) => {
        fs.writeFile(dst, data);
    });
}

// 大文件复制：管道流
function bigCopy(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv) { //命令行运行
    smallCopy(argv[0], argv[1]);
}
// main(process.argv.slice(2))
// smallCopy('./fs/t1.txt', './fs/t2.txt')

fs.stat('./fs/t1.txt', function (err, stats) {
    console.log(stats.isFile());         //true
})

