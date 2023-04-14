window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    //alert("reg button clicked");
    //first name box validation
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
    // //last name box validation
    // let lastNameBox = <HTMLInputElement>document.getElementById("last-name");
    // let lName = lastNameBox.value;
    // if(fName == ""){
    //     let errSpan = <HTMLSpanElement>lastNameBox.nextElementSibling;
    //     errSpan.innerText = "Last name is required";
    // }
}

/**
 * Returns true if the text box with the given id
 * has some text inside of it
 * @param id The id of the <input type="text"> to validate
 * @param errorMsg The message to display in the sibling span 
 * of the textbox
 * @returns true or false
 */
function isTextPresent(id:string, errorMsg:String):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errorMsg;
        return false;
    }
    return true;
}
