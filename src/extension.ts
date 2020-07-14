// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	let message = 
	"TotalCross Extension: the current had its ownership move to the official TotalCross publisher." +
	" Please unninstall this extension and install the new extension from the official publisher.";
	let installExt = "Install new extension";
	let removeCurr = "Remove current extension";
	let result = await vscode.window.showWarningMessage(message, installExt, removeCurr);
	if(result === installExt) {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('vscode:extension/totalcross.totalcross'));
		result = await vscode.window.showWarningMessage(message, removeCurr);
	}
	if(result === removeCurr) {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('vscode:extension/italo.totalcross'));
	}	
}

// this method is called when your extension is deactivated
export function deactivate() {}
