const vscode = require('vscode');

const cohere = require('cohere-ai');

const COHERE_API_KEY = vscode.workspace.getConfiguration().get('prompt2git.COHERE_API_KEY');

cohere.init(COHERE_API_KEY);
