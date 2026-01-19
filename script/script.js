let imgDivisions;
imgDivisions = document.getElementsByClassName("carrosel-img");
cumrpimento = imgDivisions.length
let current = 0

function displayChange(){
    if (current === cumrpimento-1){
        imgDivisions[current].style.display = "none";
        current = 0;
        imgDivisions[current].style.display = "block";
    }
    else{
        imgDivisions[current].style.display = "none";
        imgDivisions[current+1].style.display = "block";
        current += 1;
    }
}

setInterval(displayChange,2000)

