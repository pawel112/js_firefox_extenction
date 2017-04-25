function updateData()
{
	var result = "";
	browser.storage.local.set
	({
		optionsJson: null
	});
	
	browser.storage.local.get().then((res) =>
	{
		for (var i=0; i<res.optionsLists.length; i++)
		{
			$.ajax
			({
				type:     "GET",
				url:      res.optionsLists[i],
				success: function(data)
				{				
					if (JSON.stringify(data) != "{\"location\":null}")
					{
						if (result == "")
						{
							result = (JSON.stringify(data));
						}
						else
						{
							result += ("<br/>"+JSON.stringify(data));
						}
					}
					
					browser.storage.local.set
					({
						optionsJson: result.split ("<br/>"),
						optionsUpdateData: new Date().toJSON().slice(0,10)
					});
				}
			});
		}
	});
}

function checkUpdate()
{
	var date1 = new Date().toJSON().slice(0,10);
	var date2 = null;
	var optionsUpdate = null;
	
	browser.storage.local.get().then((res) =>
	{
		date2 = res.optionsUpdateData;
		optionsUpdate = res.updateFrequencyListValue;
	})
	
	var timeDiff = Math.abs(date2.getTime() - date1.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	
	switch (optionsUpdate)
	{
		case 0:
			if (diffDays > 0)
			{
				updateData();
			}
			break;
		case 1:
			if (diffDays > 3)
			{
				updateData();
			}
			break;
		case 2:
			if (diffDays > 7)
			{
				updateData();
			}
			break;
	}
}