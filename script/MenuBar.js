function menuBar(){
    let ul = document.querySelector("header ul");
    if (ul.style.display === "none"){
        ul.style.display = "inline-block"
    }
    else{
         ul.style.display = "none"
    }
    if(window.screen.width > 500){
        ul.style.display = "inline-block"
    }
}