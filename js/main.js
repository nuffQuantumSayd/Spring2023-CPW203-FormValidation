window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    resetErrMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
}
function resetErrMessages() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
function isTextPresent(id, errorMsg) {
    var txtBox = document.getElementById(id);
    var txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errorMsg;
        return false;
    }
    return true;
}
