function saveOptions(e)
{
	//TODO
	//SPRAWDZANIE PÓL
	
	var updateFrequencyListValue = 2;
	var lists = new Array();
	var ignoredURL = new Array();
	var ignoredWord = new Array();
	var ignoredCourierCompany = new Array();
	
	for (var i=0; i<document.getElementsByName("lists").length; i++)
	{
		lists.push (document.getElementsByName("lists")[i].value);
	}
	for (var i=0; i<document.getElementsByName("ignoredURL").length; i++)
	{
		ignoredURL.push (document.getElementsByName("ignoredURL")[i].value);
	}
	for (var i=0; i<document.getElementsByName("ignoredWord").length; i++)
	{
		ignoredWord.push (document.getElementsByName("ignoredWord")[i].value);
	}
	for (var i=0; i<document.getElementsByName("ignoredCourierCompany").length; i++)
	{
		ignoredCourierCompany.push (document.getElementsByName("ignoredCourierCompany")[i].value);
	}
	
	if (document.getElementsByName("optionsUpdateFrequencyListValue")[0].checked == true)
	{
		updateFrequencyListValue = 0;
	}
	else if (document.getElementsByName("optionsUpdateFrequencyListValue")[1].checked == true)
	{
		updateFrequencyListValue = 1;
	}
	
 	browser.storage.local.set
 	({	  
		optionsUpdateFrequencyListValue: updateFrequencyListValue,
		optionsLists: lists,
		optionsIgnoredURL: ignoredURL,
		optionsIgnoredWord: ignoredWord,
		optionsIgnoredCourierCompany: ignoredCourierCompany
	});
	e.preventDefault();
}

function restoreOptions()
{
	browser.storage.local.get().then((res) =>
	{
		if (!((res.optionsUpdateFrequencyListValue == 0) || (res.optionsUpdateFrequencyListValue == 1) || (res.optionsUpdateFrequencyListValue == 2)))
		{
			res.optionsUpdateFrequencyListValue = 0;
			browser.storage.local.set
			({	  
				optionsUpdateFrequencyListValue: 0
			});
		}
		document.getElementsByName("optionsUpdateFrequencyListValue")[res.optionsUpdateFrequencyListValue].checked = true;
		
		if (!((res.optionsLists == [""]) || (res.optionsLists == "") || (res.optionsLists == null) || (res.optionsLists == undefined)))
		{
			for (var i=0; i<res.optionsLists.length; i++)
			{
				addNewFieldList();
			}
			for (var i=0; i<res.optionsLists.length; i++)
			{
				document.getElementsByName("lists")[i].value = res.optionsLists[i];
			}
		}
		else
		{
			document.getElementsByName("optionsLists").innerHTML += "<br/>"+browser.i18n.getMessage("optionsIgnoredNone");	
			res.optionsLists = "";
			browser.storage.local.set
			({	  
				optionsLists: new Array()
			});
		}
		
		if (!((res.optionsIgnoredURL == [""]) || (res.optionsIgnoredURL == "") || (res.optionsIgnoredURL == null) || (res.optionsIgnoredURL == undefined)))
		{
			for (var i=0; i<res.optionsIgnoredURL.length; i++)
			{
				addNewFieldURL();
			}
			for (var i=0; i<res.optionsIgnoredURL.length; i++)
			{
				document.getElementsByName("ignoredURL")[i].value = res.optionsIgnoredURL[i];
			}
		}
		else
		{
			document.getElementsByName("optionsIgnoredURL").innerHTML += "<br/>"+browser.i18n.getMessage("optionsIgnoredNone");	
			res.optionsIgnoredURL = "";
			browser.storage.local.set
			({	  
				optionsIgnoredURL: new Array()
			});
		}
		
		if (!((res.optionsIgnoredWord == [""]) || (res.optionsIgnoredWord == "") || (res.optionsIgnoredWord == null) || (res.optionsIgnoredWord == undefined)))
		{
			for (var i=0; i<res.optionsIgnoredWord.length; i++)
			{
				addNewFieldWord();
			}
			for (var i=0; i<res.optionsIgnoredWord.length; i++)
			{
				document.getElementsByName("ignoredWord")[i].value = res.optionsIgnoredWord[i];
			}
		}
		else
		{
			document.getElementsByName("optionsIgnoredWord").innerHTML += "<br/>"+browser.i18n.getMessage("optionsIgnoredNone");	
			res.optionsIgnoredWord = "";
			browser.storage.local.set
			({	  
				optionsIgnoredWord: new Array()
			});
		}
		
		if (!((res.optionsIgnoredCourierCompany == [""]) || (res.optionsIgnoredCourierCompany == "") || (res.optionsIgnoredCourierCompany == null) || (res.optionsIgnoredCourierCompany == undefined)))
		{
			for (var i=0; i<res.optionsIgnoredCourierCompany.length; i++)
			{
				addNewFieldCourierCompany();
			}
			for (var i=0; i<res.optionsIgnoredCourierCompany.length; i++)
			{
				document.getElementsByName("ignoredCourierCompany")[i].value = res.optionsIgnoredCourierCompany[i];
			}
		}
		else
		{
			document.getElementById("optionsIgnoredCourierCompany").innerHTML += "<br/>"+browser.i18n.getMessage("optionsIgnoredNone");	
			res.optionsIgnoredCourierCompany = "";
			browser.storage.local.set
			({	  
				optionsIgnoredCourierCompany: new Array()
			});
		}
	});
}

function removeLists(numer)
{
	
}

function removeURL(numer)
{
	
}

function optionsRemoveWord(numer)
{
	
}

function removeCourierCompany(numer)
{
	
}

function addNewFieldList()
{
	var temp = new Array();
	for (var i=0; i<document.getElementsByName("lists").length; i++)
	{
		temp.push (document.getElementsByName("lists")[i].value);
	}
	
	document.getElementById("optionsLists").innerHTML += "<br/><textarea name=\"lists\" cols=\"100\" rows=\"1\" style=\"width: 400px; height: 15px;\"></textarea><button id=\"optionsRemoveLists\" onclick=\"removeLists("+document.getElementsByName("lists").length+")\">"+browser.i18n.getMessage("optionsIgnoredRemove")+"</button>";
	
	for (var i=0; i<temp.length; i++)
	{
		document.getElementsByName("lists")[i].value = temp[i];
	}
}

function addNewFieldURL()
{
	var temp = new Array();
	for (var i=0; i<document.getElementsByName("ignoredURL").length; i++)
	{
		temp.push (document.getElementsByName("ignoredURL")[i].value);
	}
	
	document.getElementById("optionsIgnoredURL").innerHTML += "<br/><textarea name=\"ignoredURL\" cols=\"100\" rows=\"1\" style=\"width: 400px; height: 15px;\"></textarea><button id=\"optionsRemoveURL\" onclick=\"removeURL("+document.getElementsByName("ignoredURL").length+")\">"+browser.i18n.getMessage("optionsIgnoredRemove")+"</button>";
	
	for (var i=0; i<temp.length; i++)
	{
		document.getElementsByName("ignoredURL")[i].value = temp[i];
	}
}

function addNewFieldWord()
{
	var temp = new Array();
	for (var i=0; i<document.getElementsByName("ignoredWord").length; i++)
	{
		temp.push (document.getElementsByName("ignoredWord")[i].value);
	}
	
	document.getElementById("optionsIgnoredWord").innerHTML += "<br/><textarea name=\"ignoredWord\" cols=\"100\" rows=\"1\" style=\"width: 400px; height: 15px;\"></textarea><button id=\"optionsRemoveWord\" onclick=\"removeRemoveWord("+document.getElementsByName("ignoredWord").length+")\">"+browser.i18n.getMessage("optionsIgnoredRemove")+"</button>";
	
	for (var i=0; i<temp.length; i++)
	{
		document.getElementsByName("ignoredWord")[i].value = temp[i];
	}
}

function addNewFieldCourierCompany()
{
	var temp = new Array();
	for (var i=0; i<document.getElementsByName("ignoredCourierCompany").length; i++)
	{
		temp.push (document.getElementsByName("ignoredCourierCompany")[i].value);
	}
	
	document.getElementById("optionsIgnoredCourierCompany").innerHTML += "<br/><textarea name=\"ignoredCourierCompany\" cols=\"100\" rows=\"1\" style=\"width: 400px; height: 15px;\"></textarea><button id=\"optionsRemoveCourierCompany\" onclick=\"removeCourierCompany("+document.getElementsByName("ignoredCourierCompany").length+")\">"+browser.i18n.getMessage("optionsIgnoredRemove")+"</button>";
	
	for (var i=0; i<temp.length; i++)
	{
		document.getElementsByName("ignoredCourierCompany")[i].value = temp[i];
	}
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
document.getElementById('optionsAddList').addEventListener("click", addNewFieldList);
document.getElementById('optionsAddURL').addEventListener("click", addNewFieldURL);
document.getElementById('optionsAddWord').addEventListener("click", addNewFieldWord);
document.getElementById('optionsAddCourierCompany').addEventListener("click", addNewFieldCourierCompany);

document.getElementById("optionsLists").innerHTML += browser.i18n.getMessage("optionsLists");
document.getElementById("optionsUpdateFrequencyList").innerHTML += browser.i18n.getMessage("optionsUpdateFrequencyList");
document.getElementById("optionsUpdateFrequencyListDaily").innerHTML += browser.i18n.getMessage("optionsUpdateFrequencyListDaily");
document.getElementById("optionsUpdateFrequencyListTwiceWeekly").innerHTML += browser.i18n.getMessage("optionsUpdateFrequencyListTwiceWeekly");
document.getElementById("optionsUpdateFrequencyListOnceWeek").innerHTML += browser.i18n.getMessage("optionsUpdateFrequencyListOnceWeek");
document.getElementById("optionsTitle").innerHTML += browser.i18n.getMessage("optionsTitle");
document.getElementById("optionsIgnoredURL").innerHTML += browser.i18n.getMessage("optionsIgnoredURL");
document.getElementById("optionsIgnoredWord").innerHTML += browser.i18n.getMessage("optionsIgnoredWord");
document.getElementById("optionsIgnoredCourierCompany").innerHTML += browser.i18n.getMessage("optionsIgnoredCourierCompany");
document.getElementById("optionsTitle").innerHTML = browser.i18n.getMessage("optionsTitle");
document.getElementById("optionsSave").innerHTML += browser.i18n.getMessage("optionsSave");
document.getElementById("optionsAddList").innerHTML += browser.i18n.getMessage("optionsAddToList");
document.getElementById("optionsAddURL").innerHTML = browser.i18n.getMessage("optionsAddToList");
document.getElementById("optionsAddWord").innerHTML += browser.i18n.getMessage("optionsAddToList");
document.getElementById("optionsAddCourierCompany").innerHTML += browser.i18n.getMessage("optionsAddToList");