const vscode = require('vscode');

const { generateCommand, generateText } = require('./src/controllers/appController');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const registerGenerateCommand = vscode.commands.registerCommand('prompt2git.generate.command', () => {
    console.log('test');
    generateCommand(vscode);
  });
  const registerGenerateText = vscode.commands.registerCommand('prompt2git.generate.text', () => {
    generateText(vscode);
  });

  context.subscriptions.push(registerGenerateCommand);
  context.subscriptions.push(registerGenerateText);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
