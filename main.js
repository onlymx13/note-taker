function takeNotes() {
var keyWords = document.getElementById('keywords').value.split(" ");
var sourceSentences = document.getElementById('textarea').value.split(/.!?/);
var sourceText;
for (var i=0;i<sourceSentences.length;i++) {
    sourceText = sourceSentences[i].split(" ");
    sourceText.forEach(function(element){
        if (sourceText.test(/[0-9]/) || sourceText.indexOf(element)) {
            var p = document.createElement('p');
            p.innerHTML = sourceSentences[i];
            document.body.insertBefore(p,null);
        }
    });
}
