let bound  // the bounding rect of the canvas
function gravitate() {
    canvas.addEventListener('mousedown', click)
    canvas.addEventListener('mouseup', unclick)
    canvas.addEventListener('mousemove', drag)
    bound = canvas.getBoundingClientRect();
}

let dragging = false
let start = {x: 0, y: 0}
function click(event) {
    dragging = true
    start = offset(event)
}

/**
 This offsets a mouse event x,y by the canvas position
*/
function offset({x, y}){
    return {
        x: x - bound.left,
        y: y - bound.top
    }
}

function drag(event) {
    if(dragging) {
        const current = offset(event)
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'green'
        ctx.fillRect(start.x, start.y, current.x - start.x, current.y - start.y)
    }
}

function unclick(event) {
    dragging = false
}

function popup(message) {
    alert(message)
}