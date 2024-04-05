#!/usr/bin/env node
import inquirer from "inquirer";
async function inputData() {
    let userInput = await inquirer.prompt([
        {
            name: "paragraph",
            type: "input",
            message: "Please write a paragraph..."
        },
        {
            name: "countType",
            message: "Please select one",
            type: "list",
            choices: ["Count the words", "Count the letters"]
        }
    ]);
    if (userInput.countType === "Count the letters") {
        let paragraph = userInput.paragraph;
        let removeWhiteSpaces = paragraph.replace(/\s/g, "");
        let lengthWithoutSpaces = removeWhiteSpaces.length;
        console.log(`The total characters without space is ${lengthWithoutSpaces}`);
    }
    else if (userInput.countType === "Count the words") {
        let paragraph = userInput.paragraph;
        let words = paragraph.split(/\s+/);
        let totalWords = words.length;
        console.log(`The total number of words in the paragraph is ${totalWords}`);
    }
}
inputData();
