imagecount = 30
currentimg = 1

let timerId = setInterval(() => slide('right'), 10000);

function slide(direction){
    if(direction == "right"){
        currentimg++
        if(currentimg > imagecount){
            currentimg = 1
        }
    }else if(direction == "left"){
        currentimg--
        if(currentimg < 1){
            currentimg = imagecount
        }
    }
    document.getElementById("pic").src='img/' + currentimg + '.jpg'
}