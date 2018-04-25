var keyWords;
var sourceSentences;
var sourceText;
var addedSentences = [];
function takeNotes() {
    addedSentences = [];
    while(document.getElementById('list').firstChild) {
        document.getElementById('list').removeChild(document.getElementById('list').firstChild);
    }
    keyWords = document.getElementById('keywords').value.split(" ");
    if (document.getElementById('numberFix').checked) {
    sourceSentences = document.getElementById('textarea').value.split('. ');
    } else {
    sourceSentences = document.getElementById('textarea').value.split('.');
    }
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
    var myString = str.paraphrase();
    if (addedSentences.indexOf(str) != -1)
        return;
    console.log(myString);
    var list = document.getElementById('list');
    var li = document.createElement('li');
    var textnode = document.createTextNode(myString);
    li.appendChild(textnode);
    list.appendChild(li);
    addedSentences.push(str);
}
String.prototype.paraphrase = function(string) {
    return string;
}
