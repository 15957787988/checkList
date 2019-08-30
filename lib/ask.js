const inquirer = require('inquirer')

const askQuestion = ({ questions }) =>
  inquirer.prompt([
    { name: 'remind', type: 'confirm', message: 'Do you need to be reminded'},
  ]).then(answers => {
    if(answers.remind){
      const _questions =  questions.map((question, index) => {
        return {
          name: String(index),
          type: 'confirm',
          message: question
        }
      })
      return inquirer.prompt(_questions).then(answers => {
        console.log(Object.values(answers).includes(false))
      })
    }
    return true
  })

const timer = async time => new Promise(function (resolve, reject) {
  setTimeout(resolve, time)
})

const printQuestion = async({
  questions,
  questionInterval,
  questionTitle,
}) => {
  let count = 0;
  let countDownSecond = (questionInterval / 1000) - 2
  const getCountDownText = scend => questionTitle
        ? `${questionTitle}${scend} 秒`
        : `Please read carefully: ${second} second`
  const countDown = setInterval(() => {
    try {
      process.stdout.clearLine()
      process.stdout.cursorTo(0)
      process.stdout.write(getCountDownText(countDownSecond))
      countDownSecond--
    } catch (error) {

    }
  }, 1000)

  console.log('Check list questions: ')
  for(let question of questions){
    console.log(`${count}. ${question}`)
        count++
  }
  await timer(questionInterval)
  clearInterval(countDown)
  console.log()
  return true
}

const  ask = options =>
  options.questionInterval
  ? printQuestion(options)
  : askQuestion(options)


module.exports =ask
