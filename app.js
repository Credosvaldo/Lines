var start = document.querySelector(".start")
var end = document.querySelector(".end")
var mouse
var a = new LeaderLine(start, end)
var mouse = {x: 0, y: 0}

var dragStart = false
var dragEnd = false

document.onmousemove = (m) => {
    mouse.x = m.clientX
    mouse.y = m.clientY


    if(dragStart){
        start.style.left = mouse.x + "px"
        start.style.top = mouse.y + "px"
        console.log(mouse.x)
        
        a.position(start, end)
    }

    
    if(dragEnd){
        end.style.left = mouse.x + "px"
        end.style.top = mouse.y + "px"
        console.log(mouse.x)
        
        a.position(start, end)
    }


}

start.onclick = () => {
    dragStart = !dragStart
    console.log(dragStart)
}

end.onclick = () => {
    dragEnd = !dragEnd
    console.log(dragEnd)
}


