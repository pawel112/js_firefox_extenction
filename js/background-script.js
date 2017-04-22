/*
Log that we received the message.
Then display a notification. The notification contains the URL,
which we read from the message.
*/
function URLinJson (url, json_text)
{
	var obj = JSON.parse(json_text);
	for (var i=0; i<obj.websites.length; i++)
	{
		if (url.toLowerCase().search (obj.websites[i].name.toLowerCase()) != -1)
		{
			return [true, obj.websites[i].name.toLowerCase()];	
		}
	}
	return false;
}

function wordInWeb (web_text, json_text)
{
	var obj = JSON.parse(json_text);
	for (var i=0; i<obj.word.length; i++)
	{
		if (web_text.toLowerCase().search (obj.word[i].name.toLowerCase()) != -1)
		{
			return [true, obj.word[i].name.toLowerCase()];	
		}
	}
	return false;
}

function courierCompanyInWeb (web_text, json_text)
{
	var obj = JSON.parse(json_text);
	for (var i=0; i<obj.courier_company.length; i++)
	{
		if (web_text.toLowerCase().search (obj.courier_company[i].name.toLowerCase()) != -1)
		{
			return [true, obj.courier_company[i].name.toLowerCase()];	
		}
	}
	return false;
}

function notify (message)
{
	console.log("background script received message");
	var title = browser.i18n.getMessage("notificationTitle");
	var json_text = '{ "version": 1, "date": "20.04.2017", "name": "url.json", "websites": [{ "id": 0, "name": "amazon.de" }, { "id": 1, "name": "dhl.de" }], "word": [{ "id": 0, "name": "Volkswagen" }, { "id": 1, "name": "BMW" }], "courier_company": [{ "id": 0, "name": "DHL" }, { "id": 1, "name": "DPD" }]}';
	var web_text = document.body.innerText;
	var result = URLinJson (message.url, json_text);
	var content = null;
	
	if ((message.url == null) || (message.url == "") || (message.url == undefined))
	{
		return;
	}
	else if (result != false)
	{
		content = browser.i18n.getMessage("notificationURL", [ message.url, "aaa.json"]);
	}
	else 
	{
		result = wordInWeb (web_text, json_text);
		if (result != false)
		{
			content = browser.i18n.getMessage("notificationProduct", [ message.url, "aaa.json", result[1]]);
		}
		else
		{
			result = courierCompanyInWeb (web_text, json_text);
			if (result != false)
			{
				content = browser.i18n.getMessage("notificationDelivery", [ message.url, "aaa.json", result[1]]);
			}
			else
			{
				return;
			}
		}
	}
		
	browser.notifications.create
	({
		"type": "basic",
		"iconUrl": browser.extension.getURL("../icons/link-48.png"),
		"title": title,
		"message": content
	});
	
	browser.notifications.onClicked.addListener(function()
	{
  		console.log('Notification  was clicked by the user');
	});
}

/*
Assign `notify()` as a listener to messages from the content script.
*/
browser.runtime.onMessage.addListener(notify);
