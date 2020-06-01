module.exports = {
  name: 'make:command',
  description: 'This is description',
  flags: {
    name: { aliases: ['n'], description: 'command name', required: false },
    description: { aliases: ['d'], description: 'command description', required: false },
  },
  execute(cli) {
		// leave this line intact, it will process arguments, applying defaults where applicable
    cli.arguments = cli.setDefaultFlags(cli, this.flags)

		// all arguments can be accesses off the `cli.arguments` variable
		cli.print.information('Name: ', cli.arguments.name)
		cli.print.information('Description: ', cli.arguments.description)

		// this can be useful to easily print all arguments
    cli.print.important('Arguments:     ' + JSON.stringify(cli.arguments).replace(/,/gi, ', '))

		// example processing command
		cli.print.info(`Hello ${cli.arguments.name}`)
  }
}
