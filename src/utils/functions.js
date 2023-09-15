const execute = (vscode, command) => {
  const terminal = vscode.window.createTerminal({ hideFromUser: false });
  terminal.sendText(command);
  terminal.show();
  vscode.window.showInformationMessage(`Running: ${command}`);
};

module.exports = { execute };
