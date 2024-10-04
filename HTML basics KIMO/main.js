const mycanvas=document.getElementById('myCanvas')
const cxt=mycanvas.getContext('2d')

cxt.fillStyle='blue'
cxt.beginPath();
cxt.moveTo(20,20)
cxt.lineTo(20,120)
cxt.lineTo(100,120)
cxt.moveTo(20,20)
cxt.lineTo(100,120)
cxt.strokeStyle='blue'
cxt.stroke()