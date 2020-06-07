const { prompt, Input } = require('enquirer')
const colors = require('ansi-colors')

module.exports = {
  confirm: (message = 'test', overrides = {}, response) => {
    let defaultOptions = {
      type: 'confirm',
      name: 'answer',
      message: message,
      styles: { primary: colors.blue },
      initial: true,
      separator: () => '',
      format: () => ''
    }

    prompt(Object.assign(defaultOptions, overrides))
      .then(answer => response(answer))
      .catch(console.error)
  },
  input: (message = '', overrides = {}, response) => {
    const prompt = new Input(
      Object.assign(
        {
          message,
          initial: '',
          styles: { primary: colors.blue }
        },
        overrides
      )
    )

    prompt
      .run()
      .then(answer => {
        console.log(answer)
      })
      .catch(console.error)
  }
}
