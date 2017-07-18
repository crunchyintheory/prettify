let textArea = document.getElementsByTagName('textarea')[0];
let pretty = document.getElementsByClassName('prettyprint')[0];
let selectbtn = document.getElementsByClassName('select-icon')[0];
let prettybtn = document.getElementById('pretty-btn');

let accelerator = 'Ctrl';

const prettify = function () {
    if(textArea.value == "") {
        prettybtn.disabled = true;
    }
    else {
        prettybtn.disabled = false;
    }
    pretty.className = 'prettyprint';
    pretty.innerText = textArea.value;
    pretty.appendChild(selectbtn);
    PR.prettyPrint();
};
function SelectText(element) {
    let doc = document,
        text = doc.getElementById(element),
        range, selection;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}
document.onclick = function (e) {
    if (e.target.className === 'click') {
        SelectText('selectme');
    }
};
selectbtn.addEventListener('click', () => {
    SelectText('output');
    let snackbarContainer = document.querySelector('#toast');
    let data = { message: `Text Selected. Press ${accelerator}-C to copy.` };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
});