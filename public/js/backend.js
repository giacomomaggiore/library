let height = window.innerHeight
let width = window.innerWidth
let flag

function isMobile(){
    if (height > width){
        flag = "mobile" 
    }
    if (height < width){
        flag = "desktop"
    }
    return flag
}

var items = document.body.getElementsByTagName("*");
let k
for (k = 0; k < items.length; k++){
    items[k].classList.add(isMobile())

}


console.log("BACKEND COLLEGATO")