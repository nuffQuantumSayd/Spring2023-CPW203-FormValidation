window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    let msgHeading = document.createElement("h2");
    msgHeading.innerText = "Processing form";
    msgHeading.setAttribute("class", "message");
    let h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);

    setTimeout(function(){
        msgHeading.remove();
    }, 5000)
    
    resetErrMessages();
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
    //validate date
    checkValidDate();

}
function checkValidDate() {
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if (!isValidDate(dob)) {
        dobBox.nextElementSibling.innerHTML = "Invalid format. mm/dd/yyyy";
    }
}

function isValidDate(input:string):boolean{
    //Validating mm/dd/yyyy and m/d/yyyy
    // nn/dd/yyyy
    // \d{1,2}\/\d{1,2}\/\d{4}
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    let result = pattern.test(input);
    return result;
}
/**
 * Resets all spans back to the default text
 */
function resetErrMessages():void{
    let allSpans = document.querySelectorAll("form span");
    for(let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];
        if(currSpan.hasAttribute("data-required")){
            currSpan.innerText = "*";
        }
        else{
            currSpan.innerText = "";
        }
    }
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
