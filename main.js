function takeNotes() {
var keyWords = document.getElementById('keywords').value.split(" ");
var sourceText = document.getElementById('textarea').value.split(" ");
for (var i=0;i<sourceText.length;i++){
    if(/\d/.test(sourceText[i]) || keyWords.indexOf(sourceText[i]) != -1) {
        var x = i;
        do {
            x--;
        } while (x>0 && sourceText[x].indexOf('.') == -1);
        var str=sourceText[x];
        for (var j=x+1;j<=i;j++) {
            str += " "+sourceText[j];
        }
        var node=document.createTextNode(str+"\n");
        var list=document.getElementById('list')
        list.appendChild(node);
    }
}
}
