const { textToCommand, commandToText } = require('../services/promptService');
const { execute } = require('../utils/functions');

const generateCommand = async (vscode) => {
  let text = await vscode.window.showInputBox({
    prompt: 'Prompt',
    placeHolder: 'Example: Shows a detailed record of all changes',
  });

  if (text.lenght === 0) {
    return;
  }

  let command = textToCommand(text);

  vscode.window.showInformationMessage('The command suggestion is: ' + command);

  let launch = await vscode.window.showQuickPick(['Yes', 'No'], {
    placeHolder: 'The command suggestion is: ' + command + '. Can you run this command?',
  });

  if (launch === 'Yes') {
    execute(vscode, command);
  }
};

const generateText = async (vscode) => {
  let command = await vscode.window.showInputBox({
    prompt: 'Git',
    placeHolder: 'Example: git stash',
  });

  if (command.lenght === 0) {
    return;
  }

  let text = commandToText(command);

  vscode.window.showInformationMessage('This command means: ' + text);
};

module.exports = { generateCommand, generateText };
