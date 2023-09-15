const vscode = require('vscode');

// const { Configuration, OpenAIApi } = require('openai');

const OPENAI_API_KEY = vscode.workspace.getConfiguration().get('prompt2git.OPENAI_API_KEY');
const OPENAI_API_ORGANIZATION = vscode.workspace.getConfiguration().get('prompt2git.OPENAI_API_ORGANIZATION');

// const configuration = new Configuration({
//   apiKey: OPENAI_API_KEY,
//   organization: OPENAI_API_ORGANIZATION,
// });

// const openai = new OpenAIApi(configuration);
