function welcomeFunction(){

//function to clear the text in the input field
function clearText(){
    document.getElementById("name").value = "";
}

//clicking on the submit button
document.getElementById("button").onclick = function(){

    var x = document.getElementById("name").value;

    clearText();

    if (x === "") {
         alert("You Didn't Type Your Name");
     } else{
        alert(x + ", Your Name is Lovely");
        location.href="GameModeSelection.html";
     }

    var name = x;

    localStorage.setItem("x", name);
    console.log(name);
}

//Enable the keyboard "Enter" key to submit the word
document.getElementById("name").addEventListener("keypress",function (event) {
    
    //number 13 is the "Enter" key on the keyboard
    if(event.keycode===13 || event.which===13){
        //alert("Hi")
        //cancel the default action if needed**
        //event.preventDefault();
        //trigger the button element with a click
        document.getElementById("button").click();
    }
})
    

    

}
        
     


