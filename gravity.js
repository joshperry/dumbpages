/**
 This offsets a mouse event x,y by the canvas position
*/
function offset({target, x, y}){
    bound = target.getBoundingClientRect();
    return {
        x: x - bound.left,
        y: y - bound.top
    }
}

function gravitator(canvas) {
    let dragging = false
    let start = {x: 0, y: 0}
    function click(event) {
        dragging = true
        start = offset(event)
    }

    function drag(event) {
        if(dragging) {
            const current = offset(event)
            const canvas = event.target
            const ctx = canvas.getContext('2d')
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = 'green'
            ctx.fillRect(start.x, start.y, current.x - start.x, current.y - start.y)
        }
    }

    function unclick(_event) {
        dragging = false
    }

    canvas.addEventListener('mousedown', click)
    canvas.addEventListener('mouseup', unclick)
    canvas.addEventListener('mousemove', drag)
}

function popup(message) {
    alert(message)
}
