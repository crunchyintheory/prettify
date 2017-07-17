let textArea = document.getElementsByTagName('textarea')[0];
let pretty = document.getElementsByClassName('prettyprint')[0];
let copybtn = document.getElementsByClassName('copy-icon')[0];
const prettify = function() {
    pretty.className = 'prettyprint';
    pretty.innerText = textArea.value;
    pretty.appendChild(copybtn);
    PR.prettyPrint();
};
new Clipboard('.copy-icon');