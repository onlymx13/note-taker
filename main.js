var keyWords;
var sourceSentences;
var sourceText;
var addedSentences = [];
function takeNotes() {
    keyWords = document.getElementById('keywords').value.split(" ");
    sourceSentences = document.getElementById('textarea').value.split('. ');
    for (let sentence of sourceSentences) {
        sourceText = sentence.split(" ");
        if (/[0-9]/.test(sentence)) {
            add(sentence);    
        }
        for (let keyWord of keyWords) {
            if (sourceText.indexOf(keyWord) != -1) {
                add(sentence);
            }
        }
    }
}
function add(str) {
    if (addedSentences.indexOf(str) != -1)
        return;
    console.log(str);
    var list = document.getElementById('list');
    var li = document.createElement('li');
    var textnode = document.createTextNode(str);
    li.appendChild(textnode);
    list.appendChild(li);
    addedSentences.push(str);
}
