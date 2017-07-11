let textArea = document.getElementsByTagName('textarea')[0];
let pretty = document.getElementsByClassName('prettyprint')[0];
const prettify = function() {
    pretty.className = 'prettyprint';
    pretty.innerText = textArea.value;
    PR.prettyPrint();
};