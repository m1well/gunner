/* Command Descritption
 * Filename on disk must match the module name property
 * It will accept kebabCase or camelCase from module name
 * Example name 'hello:world' will find command filename 'helloWorld.js' or 'hello-world.js'
 *
 * Each command has the following keys
 *  - name: command name (showed in help)
 *  - description: command description (showed in help)
 *  - disabled [optional]: <true|false> if true, the command will not be executable
 *  - hidden [optional]: <true|false> if true, the command will not be available when showing help
 *  - usage [optional]: description of how to use command (showed in help)
 *  - arguments [optional]: positional arguments (name will always be required)
      - name: created command name (required: true)
 *  - flags [object]: each flag object contains the following properties
 *    - name: command name (example make:command)
 *    - aliases [optional]: array of flag aliass
 *    - description [optional: Command description (displayed when show help)
 *    - required [optional]: <true|false> optional parameter if flag is required
 */
const colors = require('chalk')

module.exports = {
  name: 'xxx',
  description: '',
  disabled: false,
  hidden: false,
  usage: `xxx ${colors.magenta('<resource>')} ${colors.blue('[options]')}`,
  flags: {
    // example flag, adjust accordingly
    name: { aliases: ['n'], description: 'Command name', required: false }
  },
  execute(toolbox) {
    /*
     * - you can use the following variables when creating your command
     * - toolbox.commandName
     * - toolbox.arguments
     */
    // get quiet flag
    let quiet = toolbox.getOptionValue(toolbox.arguments, ['quiet', 'q'])

		// example processing command
    let name = toolbox.strings.titleCase(toolbox.arguments.name || 'world')
    toolbox.print.info(`Hello ${name}`)
  }
}
