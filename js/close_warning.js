document.getElementById("warning_span").onclick = function()
{
	var div = this.parentElement;
	div.style.opacity = "0";
	setTimeout(function(){ div.style.display = "none"; }, 600);
}