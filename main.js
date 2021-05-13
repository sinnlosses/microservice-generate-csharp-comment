/**
 * 処理を実行する.
 */
function execute() {
    var inputText = getHtmlInputElementById("inputTextarea").value.trim();
    var inputRows = inputText.split("\n");
    for (var i = 0; i < inputRows.length; i++) {
        var splitedRows = identifySplitCharacter(inputRows[i]);
        var japaneseName = splitedRows[0].trim();
        var englishName = splitedRows[1].trim();
        inputRows[i] = "/// <summary>\n/// " + japaneseName + "\n/// </summary>\nprivate const string COL_" + englishName.toUpperCase() + " = \"" + englishName + "\";";
    }
    var outputTextarea = document.getElementById("outputTextarea");
    outputTextarea.value = inputRows.join("\n");
}
/**
 * 指定したIDを持つエレメントを返す.
 * @param id エレメントID
 */
function getHtmlInputElementById(id) {
    return document.getElementById(id);
}
function identifySplitCharacter(inputRow) {
    if (inputRow.split("\t").length >= 2) {
        return inputRow.split("\t");
    }
    else {
        return inputRow.split(" ");
    }
}
