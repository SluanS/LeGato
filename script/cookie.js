function closeCookieCard(){
    let cookieDiv;
    cookieDiv =  document.querySelector("#cookies");
    cookieDiv.style.display = "none";
}

function acceptCookies(){
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let date = new Date()
    let day = date.getDate();
    let month = monthNames[date.getMonth()];
    let year = date.getFullYear() + 1;
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
    document.cookie = `cookieAllowed=true; expires=${day} ${month} ${year} ${time} UTC; path='/'`
    cookieDiv = document.getElementById("cookies")
    cookieDiv.style.display = "none"
}

function isCookieAlowed(){
    cookies = decodeURIComponent(document.cookie);
    arrayCookies = cookies.split(";");
    console.log(arrayCookies);
    if (arrayCookies[0]== ""){
        return false
    }
    for (let i = 0; i < arrayCookies.length; i++){
        splited = arrayCookies[i].split("=")
        arrayCookies[i] = splited
    };
    for (let i = 0; i < arrayCookies.length; i++){
        let key = arrayCookies[i][0].toLowerCase().trim()
        let value = arrayCookies[i][1].toLowerCase().trim()
        if(key === "cookieallowed"){
            if (value === "true"){
                return true
            }
            else{
                false
            }
        }
    }
    return false
}

function verifyPermission(){
    let permission = isCookieAlowed()
    if (permission){
        cookieDiv = document.getElementById("cookies")
        cookieDiv.style.display = "none"
    }
    else{
        console.log("ativando display")
        cookieDiv = document.getElementById("cookies")
        cookieDiv.style.display = "inline-block"
    }
}

verifyPermission()