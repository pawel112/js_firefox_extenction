function URLinJson (url, json_text)
{
	var obj = JSON.parse(text);
	for (var i=0; i<obj.websites.length; i++)
	{
		if (obj.websites[i].name == url)
		{
			return true;	
		}
	}
	return false;
}

function wordInWeb (web_text, json_text)
{
	var obj = JSON.parse(text);
	for (var i=0; i<obj.websites.length; i++)
	{
		if (web_text.search (obj.websites[i].name) != -1)
		{
			return true;	
		}
	}
	return false;
}

//document.body.innerText
//document.body.innerHTML.search ("text");