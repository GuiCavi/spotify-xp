import chalk from "../chalk/source";

export const printer = {
  invalid_client_id: "Invalid client ID",
  invalid_client_secret: "Invalid client secret",
  invalid_callback_url: "Invalid callback URL",

  provide_client_id: "Please, provide a client ID.",
  provide_client_secret: "Please, provide a client secret.",
  provide_callback_url: "Please, provide a callback URL.",

  enter_client_id: "Enter your client ID:",
  enter_client_secret: "Enter your client secret:",
  enter_callback_url: "Enter your callback URL:",

  dotenv_created: () => console.log("%s .env file created.", chalk.green("✔")),
  dotenv_overwrite: () => console.log("%s: This command will overwrite the .env file.\n", chalk.bgRed.white("ATTENTION")),
  dotenv_not_exists: () => console.log("%s .env file does not exist. Please run %s first.", chalk.red("✘"), chalk.cyan("sxp init")),

  commands_list: (commands) => {
    console.log("%sPlease, provide one of the commands listed below", chalk.cyan("."));
    Object.keys(commands).forEach((command) => {
      console.log(`  ${chalk.yellow(command)}`);
    });
  },

  start_cli: () => console.log("\n%s Starting sxp-cli...\n", chalk.green("✔")),
  unknown_command: (command) => console.log("%s Unknown command: %s\n", chalk.red.bold("✘"), chalk.red.bold(command)),

  run_command_help_text: () => {
    const helpText = `
%s:

This command is just a way to help you get the project running.
Please, keep in mind that you can run the command

%s

in order to get a better output for your application.
    `;

    console.log(chalk.blue.underline.bold("                     "));
    console.log(helpText, chalk.bgRed.white("ATTENTION"), chalk.yellow("yarn start"));
    console.log(chalk.blue.underline.bold("                     \n"));
  },
};
