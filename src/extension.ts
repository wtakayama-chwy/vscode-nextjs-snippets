import * as vscode from "vscode";
import { jsSnippets } from "./snippets/javascript/index";
import { tsSnippets } from "./snippets/typescript/index";
import { Snippet } from "./types/Snippet";

interface Result extends Omit<Snippet, "prefix"> {
  id: number;
  label: string;
  value: string;
}

const convertSnippetToArr = (arr: string[]): string => arr.join("\n");

export function activate(context: vscode.ExtensionContext) {
  console.log("NextJS Snippets extension has been activated!");

  const disposable = vscode.commands.registerCommand(
    "extension.snippetSearch",
    async () => {
      const javascriptSnippets = Object.values(jsSnippets);
      const typescriptSnippets = Object.values(tsSnippets);
      const mergedSnippets: Snippet[] = [
        ...javascriptSnippets,
        ...typescriptSnippets,
      ];

      const normalizedSnippets: Result[] = mergedSnippets.reduce(
        (snippets: Result[], snippet: Snippet, i: number) => {
          const value =
            typeof snippet.prefix === "string"
              ? snippet.prefix
              : snippet.prefix[0];
          snippets = [
            ...snippets,
            {
              id: i,
              body: snippet.body,
              label: value,
              value: value,
              description: snippet.description,
            },
          ];

          return snippets;
        },
        []
      );

      const options: vscode.QuickPickOptions = {
        matchOnDescription: true,
        matchOnDetail: true,
        placeHolder: "Search snippet",
      };

      const snippet = (await vscode.window.showQuickPick(
        normalizedSnippets,
        options
      )) || {
        body: "",
      };

      const activeTxtEditor = vscode.window.activeTextEditor;
      const body =
        typeof snippet.body === "string"
          ? snippet.body
          : convertSnippetToArr(snippet.body);

      activeTxtEditor &&
        activeTxtEditor.insertSnippet(new vscode.SnippetString(body));
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate(context: vscode.ExtensionContext) {
  console.log("NextJS Snippets extension has been deactivated");
}
