/**
 * 処理を実行する.
 */
 function execute():void{
    const inputText:string = getHtmlInputElementById("inputTextarea").value.trim();
    const inputRows:string[] = inputText.split("\n");

    for (let i = 0; i < inputRows.length; i++){
        const splitedRows:string[] = identifySplitCharacter(inputRows[i]);
        const japaneseName:string = splitedRows[0].trim();
        const englishName:string = splitedRows[1].trim();

        inputRows[i] = "/// <summary>\n/// " + japaneseName + "\n/// </summary>\nprivate const string COL_" + englishName.toUpperCase() + " = \"" + englishName + "\";"

    }
    let outputTextarea:HTMLInputElement = <HTMLInputElement>document.getElementById("outputTextarea");
    outputTextarea.value = inputRows.join("\n");
}

/**
 * 指定したIDを持つエレメントを返す.
 * @param id エレメントID
 */
function getHtmlInputElementById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

function identifySplitCharacter(inputRow:string):string[]{
    if (inputRow.split("\t").length >= 2){
        return inputRow.split("\t");
    } else {
        return inputRow.split(" ");
    }
}