canvas=document.getElementById("DRAW_ON_ME");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=3.5;
ctx.rect(169,143,430,230);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=3.5;
ctx.arc(269,210,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=3.5;
ctx.arc(369,210,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=3.5;
ctx.arc(469,210,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="brown";
ctx.lineWidth=3.5;
ctx.arc(315,250,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=3.5;
ctx.arc(415,250,40,0,2*Math.PI);
ctx.stroke();
