const readline = require('readline');
const {writefs} = require('./writeFile')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO：记录答案到数据库中
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

function lcQuestion(title){
  return new Promise(function(resolve,reject){
    rl.question(title,(answer) => {
      resolve(answer)
    })
  })
}

async function createPackage(){
  let name = await lcQuestion("你是谁？");
  let sex = await lcQuestion("性别？");
  let old = await lcQuestion("年龄？");
  let tel = await lcQuestion("电话号码？");

  let content = `{
    名字：${name}
    性别：${sex}
    年龄：${old}
    电话号码${tel}

  }`
  writefs("asd.txt",content)
  rl.close();
}

createPackage();


//加了以下代码后，会添加文件，但是不会添加内容
// rl.on('close',()=>{
//   process.exit(0);
// })