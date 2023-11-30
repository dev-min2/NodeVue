const Process = require('process');
const os = require('os');
const { extname, isAbsolute } = require('path');
console.log(Process.env.JAVA_HOME);
console.log(os.cpus());


//__filename : file명을 포함한 절대경로, __dirname : file명을 제외한 절대경로
console.log(extname(__filename));
if(isAbsolute(__filename)) {
    console.log("절대경로임")
}

console.log('구분자 : ' + sep);