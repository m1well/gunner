const { prompt } = require('enquirer')
const colors = require('ansi-colors')

async function input(config) {
  console.log('input prompt')
}

async function question(config) {
  console.log('question prompt (alias of input)')
}

async function confirm(config) {
  console.log('confirm prompt')
}

async function list(config) {
  console.log('list prompt')
}

async function autoComplete(config) {
  console.log('autoComplete prompt')
}

async function select(config) {
  config.type = 'select'
  return multiSelect(config)
}

async function multiSelect(config) {
  const answers = await prompt({
    type: config.type,
    name: config.name || 'choice',
    message: config.msg,
    pointer(state, choice) {
      return choice.index === state.index ? colors.cyan.bold(colors.symbols.pointer) : ' '
    },
    indicator(state, choice) {
      return choice.enabled ? ' ' + colors.green('●') : ' ' + colors.gray('o')
    },
    styles: {
      heading(msg) {
        return msg
      },
    },
    limit: config.limit || config.choices.length,
    initial: config.initial || config.choices[0],
    choices: config.choices || [],
  })
}

prompts = {
  boolean: (msg, initial = false, resolve, reject) => {
    const prompt = new BooleanPrompt({
      name: 'answer',
      message: msg,
      initial: initial,
    })

    prompt
      .run()
      .then((answer) => resolve(answer))
      .catch((err) => reject(console.error(err)))
  },
  confirm: (msg, initial, resolve, reject) => {
    const prompt = new Confirm({
      name: 'answer',
      message: msg,
      initial: initial,
    })

    prompt
      .run()
      .then((answer) => resolve(answer))
      .catch((err) => reject(console.error(err)))
  },
  multiSelect: (config) => {
    config['type'] = 'multiselect'
    return select(config)
  },
  select: (config) => {
    config['type'] = 'select'
    return select(config)
  },
}

module.exports = prompts
