var lines = [];
var colors = ['#00000']
var currentColor = 0;

function init()
{
	var paths = $('.waterfall path');
	for(var i = 0; i < paths.length; i++)
	{
		var line = {
			path: paths[i],
			length: paths[i].getTotalLength()
		}
		
		line.path.style.stroke = '#fff';
		line.path.style.opacity = Math.random() * 0.5;
		line.path.style.strokeWidth = Math.random()*2;
		line.path.style.strokeDasharray = line.length + ' ' + line.length;
		line.path.style.strokeDashoffset = (Math.random() *( line.length * 2)) - line.length;
		lines.push(line);
	}
}

function tick(timestamp) 
{
	for(var i = 0; i < lines.length; i++)
	{
		var newOffset = Number(lines[i].path.style.strokeDashoffset) - 10;
		if(newOffset < -(lines[i].length))
		{
			newOffset = lines[i].length;
			checkColor(lines[i].path)
		}
		lines[i].path.style.strokeDashoffset = newOffset;
	}
	
	window.requestAnimationFrame(tick);
}

function checkColor(path)
{
	path.style.stroke = Math.random() < 0.1 ? '#fff' : colors[currentColor];
	path.style.strokeWidth = Math.random()*3;
}

function nextColor()
{
	currentColor++;
	if(currentColor >= colors.length) currentColor = 0;
}

init();
window.requestAnimationFrame(tick);

setInterval(function(){ nextColor() }, 1000);
