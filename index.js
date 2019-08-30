const chalk = require('chalk')

const config = require("./config")
const ask = require("./lib/ask")
const checkRule =  require('./lib/checkRule')

async function check(
  {
    rules,
    questions,
    questionTitle,
    questionInterval,
  } = {}
){
  const failedRules = rules.filter((rule,index) => !checkRule({...rule, index}))
  
  if(failedRules.length){
    console.log(chalk.red(`\n  ✖ total ${failedRules.length} rules failed!`))
    process.exit(1)
  }

  // const shouldAsk = (process.env.DEBUG !== 'true') && questions && questions.length 
  // const ok = shouldAsk ? await ask({ questions, questionInterval, questionTitle }) : true

  // if (ok) {
  //   console.log(chalk.blue('\n  √ The checklist was successful!'))
  // } else {
  //   console.log(chalk.red('\n  ✖ There are several questions you answered no!'))
  //   process.exit(1)
  //   // questions.forEach((question) => {
  //   //     console.log(chalk.blue(`> ${question}`))
  //   // })
  // }
}

check(config)