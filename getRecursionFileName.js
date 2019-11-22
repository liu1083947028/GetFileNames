/**
 * 递归获取目录中的文件名
 * Created by Frank on 2019.11.22.
 */
var fs = require('fs');
var readDirFun = function(path, callback){
    var fileNames = [];
    var files = fs.readdirSync(path);
    files.map((fileName)=>{
	var fileStat = fs.statSync(path + '/' +fileName);
         if(fileStat.isFile()){
            fileNames.push(path + '/' +fileName);
         }else if(fileStat.isDirectory()){
           fileNames = fileNames.concat(readDirFun(path + '/' +fileName));
         }
    })
    return fileNames;
}

var fileNames = readDirFun('pages');
console.log('fileNames=', fileNames);
/*fileNames.map((fileName, index)=>{
    console.log(`### ${index+1}. ${fileName}`);
    console.log('```');
    console.log(fs.readFileSync(fileName, 'utf8'));
    console.log('```');
})*/
